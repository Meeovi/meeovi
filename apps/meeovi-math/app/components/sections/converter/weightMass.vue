<template>
  <v-card class="converter-card" elevation="3">
    <v-card-title>Weight and Mass Converter</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-select
            v-model="fromUnit"
            :items="units"
            label="From Unit"
            variant="outlined"
            @update:model-value="convert"
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="fromValue"
            label="Value"
            type="number"
            variant="outlined"
            @input="convert"
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn icon @click="swapUnits" tabindex="0" @keyup.enter="swapUnits" @keyup.space="swapUnits">
            <v-icon>mdi-swap-vertical</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="6">
          <v-select
            v-model="toUnit"
            :items="units"
            label="To Unit"
            variant="outlined"
            @update:model-value="convert"
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="toValue"
            label="Result"
            readonly
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12">
          <v-card variant="outlined" class="pa-3">
            <div class="text-subtitle-1 mb-2">Common Conversions:</div>
            <div class="text-body-2">
              <ul>
                <li>1 kilogram = 2.20462 pounds</li>
                <li>1 pound = 16 ounces</li>
                <li>1 stone = 14 pounds</li>
                <li>1 ton (US) = 2000 pounds</li>
                <li>1 ton (metric) = 1000 kilograms</li>
              </ul>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      fromUnit: 'kilograms',
      toUnit: 'pounds',
      fromValue: 1,
      toValue: '',
      units: [
        'micrograms',
        'milligrams',
        'grams',
        'kilograms',
        'metric tons',
        'ounces',
        'pounds',
        'stones',
        'tons (US)',
        'tons (UK)'
      ],
      // Conversion factors to grams
      conversionFactors: {
        'micrograms': 0.000001,
        'milligrams': 0.001,
        'grams': 1,
        'kilograms': 1000,
        'metric tons': 1000000,
        'ounces': 28.3495,
        'pounds': 453.592,
        'stones': 6350.29,
        'tons (US)': 907185,
        'tons (UK)': 1016050
      }
    }
  },
  mounted() {
    this.convert();
  },
  methods: {
    convert() {
      if (!this.fromValue || isNaN(this.fromValue)) {
        this.toValue = '';
        return;
      }
      
      // Convert from source unit to grams
      const valueInGrams = this.fromValue * this.conversionFactors[this.fromUnit];
      
      // Convert from grams to target unit
      const convertedValue = valueInGrams / this.conversionFactors[this.toUnit];
      
      // Format the result based on the magnitude
      if (Math.abs(convertedValue) < 0.000001) {
        this.toValue = convertedValue.toExponential(6);
      } else if (Math.abs(convertedValue) > 1000000) {
        this.toValue = convertedValue.toExponential(6);
      } else {
        this.toValue = convertedValue.toFixed(6).replace(/\.?0+$/, '');
      }
      // Save to history
      this.saveToHistory();
    },
    
    swapUnits() {
      const tempUnit = this.fromUnit;
      this.fromUnit = this.toUnit;
      this.toUnit = tempUnit;
      this.convert();
    },
    saveToHistory() {
      const entry = {
        type: 'Weight/Mass Conversion',
        summary: `${this.fromValue} ${this.fromUnit} = ${this.toValue} ${this.toUnit}`,
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
.converter-card {
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
</style>