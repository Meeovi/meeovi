<template>
  <v-card class="converter-card" elevation="3">
    <v-card-title>Area Converter</v-card-title>
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
                <li>1 square meter = 10.7639 square feet</li>
                <li>1 acre = 43,560 square feet</li>
                <li>1 hectare = 10,000 square meters</li>
                <li>1 square mile = 640 acres</li>
                <li>1 square kilometer = 0.386102 square miles</li>
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
      fromUnit: 'square meters',
      toUnit: 'square feet',
      fromValue: 1,
      toValue: '',
      units: [
        'square millimeters',
        'square centimeters',
        'square meters',
        'square kilometers',
        'square inches',
        'square feet',
        'square yards',
        'square miles',
        'acres',
        'hectares'
      ],
      // Conversion factors to square meters
      conversionFactors: {
        'square millimeters': 0.000001,
        'square centimeters': 0.0001,
        'square meters': 1,
        'square kilometers': 1000000,
        'square inches': 0.00064516,
        'square feet': 0.092903,
        'square yards': 0.836127,
        'square miles': 2589988.11,
        'acres': 4046.86,
        'hectares': 10000
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
      
      // Convert from source unit to square meters
      const valueInSquareMeters = this.fromValue * this.conversionFactors[this.fromUnit];
      
      // Convert from square meters to target unit
      const convertedValue = valueInSquareMeters / this.conversionFactors[this.toUnit];
      
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