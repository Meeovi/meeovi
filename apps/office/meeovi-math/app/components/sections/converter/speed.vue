<template>
  <v-card class="converter-card" elevation="3">
    <v-card-title>Speed Converter</v-card-title>
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
                <li>1 meter per second = 3.6 kilometers per hour</li>
                <li>1 mile per hour = 1.60934 kilometers per hour</li>
                <li>1 knot = 1.852 kilometers per hour</li>
                <li>1 kilometer per hour = 0.621371 miles per hour</li>
                <li>1 mach (at sea level) = 1225.044 kilometers per hour</li>
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
      fromUnit: 'kilometers per hour',
      toUnit: 'miles per hour',
      fromValue: 1,
      toValue: '',
      units: [
        'meters per second',
        'kilometers per hour',
        'miles per hour',
        'feet per second',
        'knots',
        'mach (at sea level)'
      ],
      // Conversion factors to meters per second
      conversionFactors: {
        'meters per second': 1,
        'kilometers per hour': 0.277778,
        'miles per hour': 0.44704,
        'feet per second': 0.3048,
        'knots': 0.514444,
        'mach (at sea level)': 340.29
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
      
      // Convert from source unit to meters per second
      const valueInMetersPerSecond = this.fromValue * this.conversionFactors[this.fromUnit];
      
      // Convert from meters per second to target unit
      const convertedValue = valueInMetersPerSecond / this.conversionFactors[this.toUnit];
      
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