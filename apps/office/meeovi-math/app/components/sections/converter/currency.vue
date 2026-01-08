<template>
  <v-card class="converter-card" elevation="3">
    <v-card-title>Currency Converter</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-select
            v-model="fromCurrency"
            :items="currencies"
            label="From Currency"
            variant="outlined"
            @update:model-value="convert"
          ></v-select>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="amount"
            label="Amount"
            type="number"
            variant="outlined"
            @input="convert"
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn icon @click="swapCurrencies" tabindex="0" @keyup.enter="swapCurrencies" @keyup.space="swapCurrencies">
            <v-icon>mdi-swap-vertical</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12">
          <v-select
            v-model="toCurrency"
            :items="currencies"
            label="To Currency"
            variant="outlined"
            @update:model-value="convert"
          ></v-select>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="result"
            label="Result"
            readonly
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn color="primary" @click="convert">Convert</v-btn>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12">
          <div class="text-caption text-center mt-2">
            Exchange rates are for demonstration purposes only.
            <br>Last updated: {{ lastUpdated }}
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      fromCurrency: 'USD',
      toCurrency: 'EUR',
      amount: 1,
      result: '',
      lastUpdated: new Date().toLocaleDateString(),
      currencies: [
        'USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 
        'INR', 'BRL', 'RUB', 'KRW', 'SGD', 'NZD', 'MXN'
      ],
      // Demo exchange rates (relative to USD)
      exchangeRates: {
        USD: 1,
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110.42,
        CAD: 1.25,
        AUD: 1.35,
        CHF: 0.92,
        CNY: 6.45,
        INR: 74.5,
        BRL: 5.2,
        RUB: 73.5,
        KRW: 1150,
        SGD: 1.35,
        NZD: 1.42,
        MXN: 20.1
      }
    }
  },
  mounted() {
    this.convert();
  },
  methods: {
    convert() {
      if (!this.amount || isNaN(this.amount)) {
        this.result = 'Please enter a valid amount';
        return;
      }
      
      // Convert from source currency to USD first (if not already USD)
      let valueInUSD = this.amount;
      if (this.fromCurrency !== 'USD') {
        valueInUSD = this.amount / this.exchangeRates[this.fromCurrency];
      }
      
      // Convert from USD to target currency
      const convertedValue = valueInUSD * this.exchangeRates[this.toCurrency];
      
      // Format the result
      this.result = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: this.toCurrency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(convertedValue);
    },
    
    swapCurrencies() {
      const temp = this.fromCurrency;
      this.fromCurrency = this.toCurrency;
      this.toCurrency = temp;
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

@media (min-width: 600px) {
  .converter-card {
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>