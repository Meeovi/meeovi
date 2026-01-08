<template>
  <v-card class="converter-card" elevation="3">
    <v-card-title>Energy Converter</v-card-title>
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
                <li>1 joule = 0.239006 calories</li>
                <li>1 kilowatt-hour = 3,600,000 joules</li>
                <li>1 calorie = 4.184 joules</li>
                <li>1 BTU = 1055.06 joules</li>
                <li>1 electron volt = 1.602176634 × 10^-19 joules</li>
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
      fromUnit: 'joules',
      toUnit: 'calories',
      fromValue: 1,
      toValue: '',
      units: [
        'joules',
        'kilojoules',
        'calories',
        'kilocalories',
        'watt-hours',
        'kilowatt-hours',
        'electron volts',
        'BTU',
        'therms',
        'foot-pounds'
      ],
      // Conversion factors to joules
      conversionFactors: {
        'joules': 1,
        'kilojoules': 1000,
        'calories': 4.184,
        'kilocalories': 4184,
        'watt-hours': 3600,
        'kilowatt-hours': 3600000,
        'electron volts': 1.602176634e-19,
        'BTU': 1055.06,
        'therms': 105506000,
        'foot-pounds': 1.35582
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
      
      // Convert from source unit to joules
      const valueInJoules = this.fromValue * this.conversionFactors[this.fromUnit];
      
      // Convert from joules to target unit
      const convertedValue = valueInJoules / this.conversionFactors[this.toUnit];
      
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