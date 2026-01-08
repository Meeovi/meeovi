<template>
  <v-card class="converter-card" elevation="3">
    <v-card-title>Volume Converter</v-card-title>
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
                <li>1 liter = 0.264172 gallons (US)</li>
                <li>1 cubic meter = 1000 liters</li>
                <li>1 gallon (US) = 3.78541 liters</li>
                <li>1 cubic foot = 28.3168 liters</li>
                <li>1 cubic inch = 16.3871 milliliters</li>
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
      fromUnit: 'liters',
      toUnit: 'gallons (US)',
      fromValue: 1,
      toValue: '',
      units: [
        'milliliters',
        'liters',
        'cubic centimeters',
        'cubic meters',
        'cubic inches',
        'cubic feet',
        'cubic yards',
        'gallons (US)',
        'gallons (UK)',
        'quarts (US)',
        'pints (US)',
        'fluid ounces (US)',
        'tablespoons (US)',
        'teaspoons (US)'
      ],
      // Conversion factors to milliliters
      conversionFactors: {
        'milliliters': 1,
        'liters': 1000,
        'cubic centimeters': 1,
        'cubic meters': 1000000,
        'cubic inches': 16.3871,
        'cubic feet': 28316.8,
        'cubic yards': 764554.9,
        'gallons (US)': 3785.41,
        'gallons (UK)': 4546.09,
        'quarts (US)': 946.353,
        'pints (US)': 473.176,
        'fluid ounces (US)': 29.5735,
        'tablespoons (US)': 14.7868,
        'teaspoons (US)': 4.92892
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
      
      // Convert from source unit to milliliters
      const valueInMilliliters = this.fromValue * this.conversionFactors[this.fromUnit];
      
      // Convert from milliliters to target unit
      const convertedValue = valueInMilliliters / this.conversionFactors[this.toUnit];
      
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