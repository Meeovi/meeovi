<template>
  <v-card class="calculator-card standard-calculator" elevation="3">
    <v-card-text>
      <v-text-field
        v-model="display"
        readonly
        class="display-field"
        variant="outlined"
        hide-details
      ></v-text-field>
      
      <div class="expression-display">{{ expression || ' ' }}</div>
      
      <v-row dense class="mt-2">
        <v-col cols="3">
          <v-btn block @click="clearEntry">CE</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="clear">C</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="backspace">
            <v-icon>mdi-backspace</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addOperator('/')" color="primary">÷</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="3">
          <v-btn block @click="addDigit('7')">7</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addDigit('8')">8</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addDigit('9')">9</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addOperator('*')" color="primary">×</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="3">
          <v-btn block @click="addDigit('4')">4</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addDigit('5')">5</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addDigit('6')">6</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addOperator('-')" color="primary">−</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="3">
          <v-btn block @click="addDigit('1')">1</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addDigit('2')">2</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addDigit('3')">3</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addOperator('+')" color="primary">+</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="3">
          <v-btn block @click="toggleSign">±</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addDigit('0')">0</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addDecimal">.</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="calculate" color="success">=</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="3">
          <v-btn block @click="percentage">%</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="squareRoot">√</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="square">x²</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="reciprocal">1/x</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  emits: ['focus-request'],
  data() {
    return {
      display: '0',
      expression: '',
      previousValue: null,
      currentOperator: null,
      waitingForOperand: false,
      lastButtonWasEquals: false
    }
  },
  mounted() {
    // Request focus when component is mounted
    this.$emit('focus-request')
  },
  methods: {
    // Keyboard handling method called by parent
    handleKeyboard(event) {
      const key = event.key
      
      // Handle numeric keys
      if (/^[0-9]$/.test(key)) {
        this.addDigit(key)
        return true
      }
      // Handle decimal point
      else if (key === '.') {
        this.addDecimal()
        return true
      }
      // Handle operators
      else if (['+', '-', '*', '/'].includes(key)) {
        this.addOperator(key)
        return true
      }
      // Handle equals and Enter
      else if (key === '=' || key === 'Enter') {
        this.calculate()
        return true
      }
      // Handle backspace
      else if (key === 'Backspace') {
        this.backspace()
        return true
      }
      // Handle clear (Delete or Escape)
      else if (key === 'Delete' || key === 'Escape') {
        this.clear()
        return true
      }
      // Handle percentage
      else if (key === '%') {
        this.percentage()
        return true
      }
      // Handle square root (r key)
      else if (key.toLowerCase() === 'r') {
        this.squareRoot()
        return true
      }
      // Handle square (s key)
      else if (key.toLowerCase() === 's') {
        this.square()
        return true
      }
      // Handle reciprocal (i key)
      else if (key.toLowerCase() === 'i') {
        this.reciprocal()
        return true
      }
      // Handle toggle sign (n key for negative)
      else if (key.toLowerCase() === 'n') {
        this.toggleSign()
        return true
      }
      // Handle clear entry (e key)
      else if (key.toLowerCase() === 'e') {
        this.clearEntry()
        return true
      }
      // Handle clear (c key)
      else if (key.toLowerCase() === 'c') {
        this.clear()
        return true
      }
      
      return false // Key not handled
    },

    // Alternative methods for parent to call directly
    handleInput(value) {
      if (/^[0-9]$/.test(value)) {
        this.addDigit(value)
      } else if (value === '.') {
        this.addDecimal()
      } else if (['+', '-', '*', '/'].includes(value)) {
        this.addOperator(value)
      } else if (value === '=') {
        this.calculate()
      }
    },

    handleBackspace() {
      this.backspace()
    },

    handleClear() {
      this.clear()
    },

    addDigit(digit) {
      if (this.waitingForOperand || this.display === '0' || this.lastButtonWasEquals) {
        this.display = digit;
        this.waitingForOperand = false;
        this.lastButtonWasEquals = false;
      } else {
        this.display += digit;
      }
    },
    
    addDecimal() {
      if (this.waitingForOperand) {
        this.display = '0.';
        this.waitingForOperand = false;
        this.lastButtonWasEquals = false;
        return;
      }
      
      if (this.display.indexOf('.') === -1) {
        this.display += '.';
      }
    },
    
    addOperator(operator) {
      const inputValue = parseFloat(this.display);
      
      if (this.previousValue === null) {
        this.previousValue = inputValue;
      } else if (this.currentOperator && !this.waitingForOperand) {
        const result = this.performCalculation(this.previousValue, inputValue, this.currentOperator);
        this.display = String(result);
        this.previousValue = result;
      }
      
      this.waitingForOperand = true;
      this.currentOperator = operator;
      this.expression = `${this.previousValue} ${this.getOperatorSymbol(operator)}`;
      this.lastButtonWasEquals = false;
    },
    
    calculate() {
      const inputValue = parseFloat(this.display);
      
      if (this.previousValue !== null && this.currentOperator) {
        const result = this.performCalculation(this.previousValue, inputValue, this.currentOperator);
        this.expression = `${this.previousValue} ${this.getOperatorSymbol(this.currentOperator)} ${inputValue} =`;
        this.display = String(result);
        this.previousValue = null;
        this.currentOperator = null;
        this.waitingForOperand = true;
        this.lastButtonWasEquals = true;
      }
    },
    
    performCalculation(a, b, operator) {
      switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error';
        default: return b;
      }
    },
    
    getOperatorSymbol(operator) {
      switch (operator) {
        case '+': return '+';
        case '-': return '−';
        case '*': return '×';
        case '/': return '÷';
        default: return '';
      }
    },
    
    clear() {
      this.display = '0';
      this.expression = '';
      this.previousValue = null;
      this.currentOperator = null;
      this.waitingForOperand = false;
      this.lastButtonWasEquals = false;
    },
    
    clearEntry() {
      this.display = '0';
      this.waitingForOperand = false;
    },
    
    backspace() {
      if (this.waitingForOperand || this.lastButtonWasEquals) return;
      
      this.display = this.display.length > 1 ? 
        this.display.substring(0, this.display.length - 1) : '0';
    },
    
    toggleSign() {
      const value = parseFloat(this.display);
      this.display = String(-value);
    },
    
    percentage() {
      const value = parseFloat(this.display);
      
      if (this.previousValue !== null) {
        // Calculate percentage of the previous value
        const result = (this.previousValue * value) / 100;
        this.display = String(result);
      } else {
        // Just divide by 100
        this.display = String(value / 100);
      }
    },
    
    squareRoot() {
      const value = parseFloat(this.display);
      if (value >= 0) {
        this.display = String(Math.sqrt(value));
      } else {
        this.display = 'Error';
      }
    },
    
    square() {
      const value = parseFloat(this.display);
      this.display = String(value * value);
    },
    
    reciprocal() {
      const value = parseFloat(this.display);
      if (value !== 0) {
        this.display = String(1 / value);
      } else {
        this.display = 'Error';
      }
    }
  }
}
</script>

<style scoped>
.calculator-card {
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

.display-field {
  font-size: 2rem;
  text-align: right;
}

.expression-display {
  text-align: right;
  min-height: 20px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 8px;
  font-size: 0.9rem;
}

/* Make buttons larger on bigger screens */
@media (min-width: 600px) {
  .v-btn {
    height: 48px !important;
    font-size: 1.2rem;
  }
  
  .display-field {
    font-size: 2.5rem;
  }
}

/* Visual feedback for keyboard interaction */
.calculator-card:focus-within {
  box-shadow: 0 0 0 2px rgba(var(--v-theme-primary), 0.3) !important;
}
</style>
