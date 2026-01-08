<template>
  <v-card class="calculator-card" elevation="3">
    <v-card-title>Date Calculation</v-card-title>
    <v-card-text>
      <v-tabs v-model="activeTab">
        <v-tab value="difference">Date Difference</v-tab>
        <v-tab value="add">Add/Subtract Days</v-tab>
      </v-tabs>
      
      <v-window v-model="activeTab" class="mt-4">
        <!-- Date Difference Calculator -->
        <v-window-item value="difference">
          <v-row>
            <v-col cols="12" sm="6">
              <v-card-subtitle>From Date</v-card-subtitle>
              <v-date-picker
                v-model="fromDate"
                @update:model-value="calculateDifference"
                width="100%"
              ></v-date-picker>
            </v-col>
            
            <v-col cols="12" sm="6">
              <v-card-subtitle>To Date</v-card-subtitle>
              <v-date-picker
                v-model="toDate"
                @update:model-value="calculateDifference"
                width="100%"
              ></v-date-picker>
            </v-col>
          </v-row>
          
          <v-card class="mt-4 pa-4" variant="outlined">
            <v-card-title>Difference</v-card-title>
            <v-row>
              <v-col cols="4">
                <div class="text-center">
                  <div class="text-h4">{{ difference.days }}</div>
                  <div class="text-caption">Days</div>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="text-center">
                  <div class="text-h4">{{ difference.months }}</div>
                  <div class="text-caption">Months</div>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="text-center">
                  <div class="text-h4">{{ difference.years }}</div>
                  <div class="text-caption">Years</div>
                </div>
              </v-col>
            </v-row>
            <v-divider class="my-3"></v-divider>
            <div class="text-body-1">
              Total Days: {{ difference.totalDays }}
            </div>
            <div class="text-body-1">
              Including end date: {{ difference.totalDays + 1 }}
            </div>
            <div class="text-body-1">
              Weeks: {{ Math.floor(difference.totalDays / 7) }} weeks and {{ difference.totalDays % 7 }} days
            </div>
          </v-card>
        </v-window-item>
        
        <!-- Add/Subtract Days Calculator -->
        <v-window-item value="add">
          <v-row>
            <v-col cols="12" sm="6">
              <v-card-subtitle>Start Date</v-card-subtitle>
              <v-date-picker
                v-model="startDate"
                width="100%"
              ></v-date-picker>
            </v-col>
            
            <v-col cols="12" sm="6">
              <v-card class="pa-4" variant="outlined">
                <v-card-title>Add or Subtract</v-card-title>
                
                <v-radio-group v-model="operation" inline>
                  <v-radio label="Add" value="add"></v-radio>
                  <v-radio label="Subtract" value="subtract"></v-radio>
                </v-radio-group>
                
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="amount"
                      label="Amount"
                      type="number"
                      variant="outlined"
                      @input="calculateNewDate"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-select
                      v-model="unit"
                      :items="['days', 'weeks', 'months', 'years']"
                      label="Unit"
                      variant="outlined"
                      @update:model-value="calculateNewDate"
                    ></v-select>
                  </v-col>
                </v-row>
                
                <v-card-title>Result</v-card-title>
                <v-card-text class="text-h5">
                  {{ resultDate }}
                </v-card-text>
                
                <v-btn color="primary" block @click="calculateNewDate" tabindex="0" @keyup.enter="calculateNewDate" @keyup.space="calculateNewDate">Calculate</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'difference',
      
      // Date Difference
      fromDate: new Date().toISOString().substr(0, 10),
      toDate: new Date().toISOString().substr(0, 10),
      difference: {
        days: 0,
        months: 0,
        years: 0,
        totalDays: 0
      },
      
      // Add/Subtract Days
      startDate: new Date().toISOString().substr(0, 10),
      operation: 'add',
      amount: 1,
      unit: 'days',
      resultDate: new Date().toISOString().substr(0, 10)
    }
  },
  mounted() {
    this.calculateDifference();
    this.calculateNewDate();
  },
  methods: {
    calculateDifference() {
      const from = new Date(this.fromDate);
      const to = new Date(this.toDate);
      
      // Calculate total days difference
      const diffTime = Math.abs(to - from);
      const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      // Calculate years, months, days
      let years = to.getFullYear() - from.getFullYear();
      let months = to.getMonth() - from.getMonth();
      let days = to.getDate() - from.getDate();
      
      // Adjust for negative months or days
      if (days < 0) {
        months--;
        // Get days in the previous month
        const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0).getDate();
        days += prevMonth;
      }
      
      if (months < 0) {
        years--;
        months += 12;
      }
      
      // Handle case when dates are reversed
      if (to < from) {
        years = -years;
        if (months !== 0) {
          years--;
          months = 12 - Math.abs(months);
        }
        if (days !== 0) {
          months--;
          const prevMonth = new Date(from.getFullYear(), from.getMonth(), 0).getDate();
          days = prevMonth - Math.abs(days);
        }
      }
      
      this.difference = {
        days,
        months,
        years,
        totalDays: to > from ? totalDays : -totalDays
      };
      this.saveToHistory('Date Difference', `${this.fromDate} to ${this.toDate}: ${this.difference.totalDays} days, ${this.difference.months} months, ${this.difference.years} years`);
    },
    
    calculateNewDate() {
      const start = new Date(this.startDate);
      let result = new Date(start);
      
      const amount = parseInt(this.amount) || 0;
      const value = this.operation === 'add' ? amount : -amount;
      
      switch (this.unit) {
        case 'days':
          result.setDate(start.getDate() + value);
          break;
        case 'weeks':
          result.setDate(start.getDate() + (value * 7));
          break;
        case 'months':
          result.setMonth(start.getMonth() + value);
          break;
        case 'years':
          result.setFullYear(start.getFullYear() + value);
          break;
      }
      
      this.resultDate = result.toISOString().substr(0, 10);
      this.saveToHistory('Add/Subtract Date', `${this.operation} ${this.amount} ${this.unit} to ${this.startDate}: ${this.resultDate}`);
    },
    
    saveToHistory(type, summary) {
      const entry = {
        type,
        summary,
        timestamp: new Date().toLocaleString()
      };
      let history = [];
      try {
        history = JSON.parse(localStorage.getItem('meeovi-math-history')) || [];
      } catch {}
      history.unshift(entry);
      localStorage.setItem('meeovi-math-history', JSON.stringify(history.slice(0, 100)));
    }
  }
}
</script>

<style scoped>
.calculator-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.v-card-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.v-window {
  flex: 1;
}

.v-window-item {
  height: 100%;
}
</style>