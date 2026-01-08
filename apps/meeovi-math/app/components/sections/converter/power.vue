<template>
  <v-card class="converter-card" elevation="3">
    <v-card-title>Power Converter</v-card-title>
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
                <li>1 kilowatt = 1,000 watts</li>
                <li>1 horsepower = 745.7 watts</li>
                <li>1 BTU/hour = 0.293071 watts</li>
                <li>1 megawatt = 1,000,000 watts</li>
                <li>1 gigawatt = 1,000,000,000 watts</li>
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
      fromUnit: 'watts',
      toUnit: 'horsepower',
      fromValue: 1,
      toValue: '',
      units: [
        'watts',
        'kilowatts',
        'megawatts',
        'gigawatts',
        'horsepower (mechanical)',
        'horsepower (metric)',
        'BTU/hour',
        'foot-pounds/minute',
        'calories/second',
        'joules/second'
      ],
      // Conversion factors to watts
      conversionFactors: {
        'watts': 1,
        'kilowatts': 1000,
        'megawatts': 1000000,
        'gigawatts': 1000000000,
        'horsepower (mechanical)': 745.7,
        'horsepower (metric)': 735.5,
        'BTU/hour': 0.293071,
        'foot-pounds/minute': 0.0225969,
        'calories/second': 4.184,
        'joules/second': 1
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
      
      // Convert from source unit to watts
      const valueInWatts = this.fromValue * this.conversionFactors[this.fromUnit];
      
      // Convert from watts to target unit
      const convertedValue = valueInWatts / this.conversionFactors[this.toUnit];
      
      // Format the result based on the magnitude
      if (Math.abs(convertedValue) < 0.000001) {
        this.toValue = convertedValue.toExponential(6);
      } else if (Math.abs(convertedValue) > 1000000) {
        this.toValue = convertedValue.toExponential(6);
      } else {
        this.toValue = convertedValue.toFixed(6).replace(/\.?0+$/, '');
      }
    },
    
    swapUnits() {
      const tempUnit = this.fromUnit;
      this.fromUnit = this.toUnit;
      this.toUnit = tempUnit;
      this.convert();
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