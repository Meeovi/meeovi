<template>
  <v-card class="converter-card" elevation="3">
    <v-card-title>Angle Converter</v-card-title>
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
                <li>1 degree = π/180 radians ≈ 0.01745 radians</li>
                <li>1 radian = 180/π degrees ≈ 57.2958 degrees</li>
                <li>1 complete circle = 360 degrees = 2π radians = 400 gradians</li>
                <li>1 right angle = 90 degrees = π/2 radians = 100 gradians</li>
                <li>1 minute = 1/60 degree</li>
                <li>1 second = 1/3600 degree</li>
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
      fromUnit: 'degrees',
      toUnit: 'radians',
      fromValue: 1,
      toValue: '',
      units: [
        'degrees',
        'radians',
        'gradians',
        'minutes',
        'seconds',
        'turns',
        'milliradians'
      ],
      // Conversion factors to radians
      conversionFactors: {
        'degrees': Math.PI / 180,
        'radians': 1,
        'gradians': Math.PI / 200,
        'minutes': Math.PI / (180 * 60),
        'seconds': Math.PI / (180 * 3600),
        'turns': Math.PI * 2,
        'milliradians': 0.001
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
      
      // Convert from source unit to radians
      const valueInRadians = this.fromValue * this.conversionFactors[this.fromUnit];
      
      // Convert from radians to target unit
      const convertedValue = valueInRadians / this.conversionFactors[this.toUnit];
      
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