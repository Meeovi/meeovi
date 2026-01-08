<template>
  <v-card class="converter-card" elevation="3">
    <v-card-title>Pressure Converter</v-card-title>
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
                <li>1 atmosphere = 101,325 pascals</li>
                <li>1 bar = 100,000 pascals</li>
                <li>1 psi (pound per square inch) = 6,894.76 pascals</li>
                <li>1 torr = 133.322 pascals</li>
                <li>Standard atmospheric pressure at sea level = 1 atm = 14.7 psi</li>
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
      fromUnit: 'pascals',
      toUnit: 'psi',
      fromValue: 1,
      toValue: '',
      units: [
        'pascals',
        'kilopascals',
        'megapascals',
        'bars',
        'millibars',
        'atmospheres',
        'psi',
        'torr',
        'mmHg',
        'inHg'
      ],
      // Conversion factors to pascals
      conversionFactors: {
        'pascals': 1,
        'kilopascals': 1000,
        'megapascals': 1000000,
        'bars': 100000,
        'millibars': 100,
        'atmospheres': 101325,
        'psi': 6894.76,
        'torr': 133.322,
        'mmHg': 133.322,
        'inHg': 3386.39
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
      
      // Convert from source unit to pascals
      const valueInPascals = this.fromValue * this.conversionFactors[this.fromUnit];
      
      // Convert from pascals to target unit
      const convertedValue = valueInPascals / this.conversionFactors[this.toUnit];
      
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