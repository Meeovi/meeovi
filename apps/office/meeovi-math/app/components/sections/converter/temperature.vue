<template>
  <v-card class="converter-card" elevation="3">
    <v-card-title>Temperature Converter</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="celsius"
            label="Celsius (°C)"
            type="number"
            variant="outlined"
            @input="convertFromCelsius"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="fahrenheit"
            label="Fahrenheit (°F)"
            type="number"
            variant="outlined"
            @input="convertFromFahrenheit"
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="kelvin"
            label="Kelvin (K)"
            type="number"
            variant="outlined"
            @input="convertFromKelvin"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="rankine"
            label="Rankine (°R)"
            type="number"
            variant="outlined"
            @input="convertFromRankine"
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12">
          <v-card variant="outlined" class="pa-3">
            <div class="text-subtitle-1 mb-2">Temperature Facts:</div>
            <ul class="text-body-2">
              <li>Water freezes at 0°C (32°F)</li>
              <li>Water boils at 100°C (212°F) at sea level</li>
              <li>Absolute zero is -273.15°C (-459.67°F)</li>
              <li>Room temperature is typically around 20-22°C (68-72°F)</li>
              <li>The highest recorded temperature on Earth was 56.7°C (134°F) in Death Valley, USA</li>
              <li>The lowest recorded temperature on Earth was -89.2°C (-128.6°F) in Antarctica</li>
            </ul>
          </v-card>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn color="primary" @click="resetValues">Reset</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      celsius: '0',
      fahrenheit: '32',
      kelvin: '273.15',
      rankine: '491.67',
      // Flag to prevent infinite conversion loops
      converting: false
    }
  },
  methods: {
    // Convert from Celsius to all other units
    convertFromCelsius() {
      if (this.converting) return;
      this.converting = true;
      
      const c = parseFloat(this.celsius);
      if (!isNaN(c)) {
        this.fahrenheit = ((c * 9/5) + 32).toFixed(2);
        this.kelvin = (c + 273.15).toFixed(2);
        this.rankine = ((c + 273.15) * 9/5).toFixed(2);
      }
      
      this.converting = false;
    },
    
    // Convert from Fahrenheit to all other units
    convertFromFahrenheit() {
      if (this.converting) return;
      this.converting = true;
      
      const f = parseFloat(this.fahrenheit);
      if (!isNaN(f)) {
        this.celsius = ((f - 32) * 5/9).toFixed(2);
        this.kelvin = ((f - 32) * 5/9 + 273.15).toFixed(2);
        this.rankine = (f + 459.67).toFixed(2);
      }
      
      this.converting = false;
    },
    
    // Convert from Kelvin to all other units
    convertFromKelvin() {
      if (this.converting) return;
      this.converting = true;
      
      const k = parseFloat(this.kelvin);
      if (!isNaN(k)) {
        this.celsius = (k - 273.15).toFixed(2);
        this.fahrenheit = ((k - 273.15) * 9/5 + 32).toFixed(2);
        this.rankine = (k * 9/5).toFixed(2);
      }
      
      this.converting = false;
    },
    
    // Convert from Rankine to all other units
    convertFromRankine() {
      if (this.converting) return;
      this.converting = true;
      
      const r = parseFloat(this.rankine);
      if (!isNaN(r)) {
        this.celsius = ((r - 491.67) * 5/9).toFixed(2);
        this.fahrenheit = (r - 459.67).toFixed(2);
        this.kelvin = (r * 5/9).toFixed(2);
      }
      
      this.converting = false;
    },
    
    // Reset all values to default
    resetValues() {
      this.celsius = '0';
      this.convertFromCelsius();
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

@media (min-width: 600px) {
  .converter-card {
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>