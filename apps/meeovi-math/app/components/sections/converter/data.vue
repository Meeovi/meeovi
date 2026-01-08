<template>
  <v-card class="converter-card" elevation="3">
    <v-card-title>Data Converter</v-card-title>
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
            <div class="text-subtitle-1 mb-2">Data Units:</div>
            <div class="text-body-2">
              <ul>
                <li>1 byte = 8 bits</li>
                <li>1 kilobyte (KB) = 1,024 bytes</li>
                <li>1 megabyte (MB) = 1,024 KB = 1,048,576 bytes</li>
                <li>1 gigabyte (GB) = 1,024 MB = 1,073,741,824 bytes</li>
                <li>1 terabyte (TB) = 1,024 GB = 1,099,511,627,776 bytes</li>
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
      fromUnit: 'megabytes',
      toUnit: 'gigabytes',
      fromValue: 1,
      toValue: '',
      units: [
        'bits',
        'bytes',
        'kilobits',
        'kilobytes',
        'megabits',
        'megabytes',
        'gigabits',
        'gigabytes',
        'terabits',
        'terabytes',
        'petabits',
        'petabytes'
      ],
      // Conversion factors to bits
      conversionFactors: {
        'bits': 1,
        'bytes': 8,
        'kilobits': 1024,
        'kilobytes': 8 * 1024,
        'megabits': 1024 * 1024,
        'megabytes': 8 * 1024 * 1024,
        'gigabits': 1024 * 1024 * 1024,
        'gigabytes': 8 * 1024 * 1024 * 1024,
        'terabits': 1024 * 1024 * 1024 * 1024,
        'terabytes': 8 * 1024 * 1024 * 1024 * 1024,
        'petabits': 1024 * 1024 * 1024 * 1024 * 1024,
        'petabytes': 8 * 1024 * 1024 * 1024 * 1024 * 1024
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
      
      // Convert from source unit to bits
      const valueInBits = this.fromValue * this.conversionFactors[this.fromUnit];
      
      // Convert from bits to target unit
      const convertedValue = valueInBits / this.conversionFactors[this.toUnit];
      
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