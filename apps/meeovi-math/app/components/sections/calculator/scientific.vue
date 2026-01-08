<template>
  <v-card class="calculator-card scientific-calculator" elevation="3">
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
        <v-col cols="2">
          <v-btn block @click="setMemoryFunction('MC')" size="small">MC</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="setMemoryFunction('MR')" size="small">MR</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="setMemoryFunction('M+')" size="small">M+</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="setMemoryFunction('M-')" size="small">M-</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="setMemoryFunction('MS')" size="small">MS</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="setMemoryFunction('M▾')" size="small">M▾</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="2">
          <v-btn block @click="setFunction('2nd')" size="small" :color="secondMode ? 'primary' : ''">2<sup>nd</sup></v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculatePi()" size="small">π</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateE()" size="small">e</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="clearEntry" size="small">CE</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="clear" size="small">C</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="backspace" size="small">
            <v-icon>mdi-backspace</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="2">
          <v-btn block @click="calculateSquare()" size="small">x²</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateInverse()" size="small">1/x</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateAbsolute()" size="small">|x|</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateExp()" size="small">exp</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateModulo()" size="small">mod</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addOperator('/')" color="primary" size="small">÷</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="2">
          <v-btn block @click="calculateSquareRoot()" size="small">√</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateParenthesis('(')" size="small">(</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateParenthesis(')')" size="small">)</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateFactorial()" size="small">n!</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addDigit('7')" size="small">7</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addDigit('8')" size="small">8</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="2">
          <v-btn block @click="calculatePower('10')" size="small">10<sup>x</sup></v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateLog()" size="small">log</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateLn()" size="small">ln</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addDigit('9')" size="small">9</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addOperator('*')" color="primary" size="small">×</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="2">
          <v-btn block @click="calculatePower('y')" size="small">x<sup>y</sup></v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateSin()" size="small">sin</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateCos()" size="small">cos</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateTan()" size="small">tan</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addDigit('4')" size="small">4</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addDigit('5')" size="small">5</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="2">
          <v-btn block @click="calculatePower('3')" size="small">x<sup>3</sup></v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateSinh()" size="small">sinh</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateCosh()" size="small">cosh</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculateTanh()" size="small">tanh</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addDigit('6')" size="small">6</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addOperator('-')" color="primary" size="small">−</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="2">
          <v-btn block @click="calculateCubeRoot()" size="small">∛</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="calculatePower('-1')" size="small">x<sup>-1</sup></v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="toggleDegRad()" size="small" :color="angleMode === 'RAD' ? 'primary' : ''">{{ angleMode }}</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addDigit('1')" size="small">1</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addDigit('2')" size="small">2</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addDigit('3')" size="small">3</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="2">
          <v-btn block @click="toggleSign()" size="small">±</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addDigit('0')" size="small">0</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addDecimal()" size="small">.</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block @click="addOperator('+')" color="primary" size="small">+</v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn block @click="calculate()" color="success" size="small">=</v-btn>
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
      lastButtonWasEquals: false,
      memory: 0,
      angleMode: 'DEG', // DEG or RAD
      secondMode: false
    }
  },
  mounted() {
    // Request focus when component is mounted
    this.$emit('focus-request')
  },
  methods: {
    // Keyboard handling method called by parent
    handleKeyboard(event) {
      const key = event.key.toLowerCase()
      
      // Handle numeric keys
      if (/^[0-9]$/.test(event.key)) {
        this.addDigit(event.key)
        return true
      }
      // Handle decimal point
      else if (event.key === '.') {
        this.addDecimal()
        return true
      }
      // Handle basic operators
      else if (['+', '-', '*', '/'].includes(event.key)) {
        this.addOperator(event.key)
        return true
      }
      // Handle equals and Enter
      else if (event.key === '=' || event.key === 'Enter') {
        this.calculate()
        return true
      }
      // Handle backspace
      else if (event.key === 'Backspace') {
        this.backspace()
        return true
      }
      // Handle clear (Delete or Escape)
      else if (event.key === 'Delete' || event.key === 'Escape') {
        this.clear()
        return true
      }
      // Handle parentheses
      else if (event.key === '(' || event.key === ')') {
        this.calculateParenthesis(event.key)
        return true
      }
      // Handle modulo
      else if (event.key === '%') {
        this.calculateModulo()
        return true
      }
      // Handle scientific functions
      else if (key === 'p') {
        this.calculatePi()
        return true
      }
      else if (key === 'e') {
        this.calculateE()
        return true
      }
      else if (key === 'r') {
        this.calculateSquareRoot()
        return true
      }
      else if (key === 's') {
        if (event.shiftKey) {
          this.calculateSin()
        } else {
          this.calculateSquare()
        }
        return true
      }
      else if (key === 'c') {
        if (event.shiftKey) {
          this.calculateCos()
        } else {
          this.clear()
        }
        return true
      }
      else if (key === 't') {
        this.calculateTan()
        return true
      }
      else if (key === 'l') {
        if (event.shiftKey) {
          this.calculateLn()
        } else {
          this.calculateLog()
        }
        return true
      }
      else if (key === 'i') {
        this.calculateInverse()
        return true
      }
      else if (key === 'a') {
        this.calculateAbsolute()
        return true
      }
      else if (key === 'f') {
        this.calculateFactorial()
        return true
      }
      else if (key === 'n') {
        this.toggleSign()
        return true
      }
      else if (key === 'd') {
        this.toggleDegRad()
        return true
      }
      else if (key === '2') {
        if (event.ctrlKey) {
          this.setFunction('2nd')
          return true
        }
      }
      // Memory functions (Ctrl + key)
      else if (event.ctrlKey) {
        if (key === 'm') {
          this.setMemoryFunction('MS')
          return true
        } else if (key === 'r') {
          this.setMemoryFunction('MR')
          return true
        } else if (key === '+') {
          this.setMemoryFunction('M+')
          return true
        } else if (key === '-') {
          this.setMemoryFunction('M-')
          return true
        } else if (key === 'c') {
          this.setMemoryFunction('MC')
          return true
        }
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
        case '%': return a % b;
        case '^': return Math.pow(a, b);
        default: return b;
      }
    },
    
    getOperatorSymbol(operator) {
      switch (operator) {
        case '+': return '+';
        case '-': return '−';
        case '*': return '×';
        case '/': return '÷';
        case '%': return 'mod';
        case '^': return '^';
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
    
    // Memory functions
    setMemoryFunction(func) {
      const value = parseFloat(this.display);
      
      switch (func) {
        case 'MC': // Memory Clear
          this.memory = 0;
          break;
        case 'MR': // Memory Recall
          this.display = String(this.memory);
          this.waitingForOperand = true;
          break;
        case 'M+': // Memory Add
          this.memory += value;
          this.waitingForOperand = true;
          break;
        case 'M-': // Memory Subtract
          this.memory -= value;
          this.waitingForOperand = true;
          break;
        case 'MS': // Memory Store
          this.memory = value;
          this.waitingForOperand = true;
          break;
      }
    },
    
    // Toggle between 2nd function set
    setFunction(func) {
      if (func === '2nd') {
        this.secondMode = !this.secondMode;
      }
    },
    
    // Constants
    calculatePi() {
      this.display = String(Math.PI);
      this.waitingForOperand = true;
    },
    
    calculateE() {
      this.display = String(Math.E);
      this.waitingForOperand = true;
    },
    
    // Basic functions
    calculateSquare() {
      const value = parseFloat(this.display);
      this.display = String(value * value);
      this.waitingForOperand = true;
    },
    
    calculateInverse() {
      const value = parseFloat(this.display);
      if (value !== 0) {
        this.display = String(1 / value);
      } else {
        this.display = 'Error';
      }
      this.waitingForOperand = true;
    },
    
    calculateAbsolute() {
      const value = parseFloat(this.display);
      this.display = String(Math.abs(value));
      this.waitingForOperand = true;
    },
    
    calculateExp() {
      const value = parseFloat(this.display);
      this.display = String(Math.exp(value));
      this.waitingForOperand = true;
    },
    
    calculateModulo() {
      // This sets up for a modulo operation
      this.addOperator('%');
    },
    
    calculateSquareRoot() {
      const value = parseFloat(this.display);
      if (value >= 0) {
        this.display = String(Math.sqrt(value));
      } else {
        this.display = 'Error';
      }
      this.waitingForOperand = true;
    },
    
    calculateCubeRoot() {
      const value = parseFloat(this.display);
      this.display = String(Math.cbrt(value));
      this.waitingForOperand = true;
    },
    
    calculateParenthesis(parenthesis) {
      // This would be implemented with a more complex expression parser
      // For now, just show the parenthesis in the expression
      this.expression += ` ${parenthesis} `;
    },
    
    calculateFactorial() {
      const value = parseInt(this.display);
      if (value < 0) {
        this.display = 'Error';
      } else if (value > 170) {
        this.display = 'Infinity';
      } else {
        let result = 1;
        for (let i = 2; i <= value; i++) {
          result *= i;
        }
        this.display = String(result);
      }
      this.waitingForOperand = true;
    },
    
    calculatePower(power) {
      const value = parseFloat(this.display);
      
      if (power === '10') {
        this.display = String(Math.pow(10, value));
      } else if (power === '3') {
        this.display = String(Math.pow(value, 3));
      } else if (power === '-1') {
        if (value !== 0) {
          this.display = String(1 / value);
        } else {
          this.display = 'Error';
        }
      } else if (power === 'y') {
        // This sets up for a power operation
        this.addOperator('^');
      }
      
      this.waitingForOperand = true;
    },
    
    calculateLog() {
      const value = parseFloat(this.display);
      if (value > 0) {
        this.display = String(Math.log10(value));
      } else {
        this.display = 'Error';
      }
      this.waitingForOperand = true;
    },
    
    calculateLn() {
      const value = parseFloat(this.display);
      if (value > 0) {
        this.display = String(Math.log(value));
      } else {
        this.display = 'Error';
      }
      this.waitingForOperand = true;
    },
    
    // Trigonometric functions
    toRadians(value) {
      return this.angleMode === 'DEG' ? value * Math.PI / 180 : value;
    },
    
    toDegrees(value) {
      return this.angleMode === 'DEG' ? value * 180 / Math.PI : value;
    },
    
    calculateSin() {
      const value = parseFloat(this.display);
      const radValue = this.toRadians(value);
      
      if (this.secondMode) {
        // Calculate arcsin
        if (value >= -1 && value <= 1) {
          const result = Math.asin(value);
          this.display = String(this.angleMode === 'DEG' ? this.toDegrees(result) : result);
        } else {
          this.display = 'Error';
        }
      } else {
        this.display = String(Math.sin(radValue));
      }
      
      this.waitingForOperand = true;
    },
    
    calculateCos() {
      const value = parseFloat(this.display);
      const radValue = this.toRadians(value);
      
      if (this.secondMode) {
        // Calculate arccos
        if (value >= -1 && value <= 1) {
          const result = Math.acos(value);
          this.display = String(this.angleMode === 'DEG' ? this.toDegrees(result) : result);
        } else {
          this.display = 'Error';
        }
      } else {
        this.display = String(Math.cos(radValue));
      }
      
      this.waitingForOperand = true;
    },
    
    calculateTan() {
      const value = parseFloat(this.display);
      const radValue = this.toRadians(value);
      
      if (this.secondMode) {
        // Calculate arctan
        const result = Math.atan(value);
        this.display = String(this.angleMode === 'DEG' ? this.toDegrees(result) : result);
      } else {
        this.display = String(Math.tan(radValue));
      }
      
      this.waitingForOperand = true;
    },
    
    calculateSinh() {
      const value = parseFloat(this.display);
      
      if (this.secondMode) {
        // Calculate arcsinh
        this.display = String(Math.asinh(value));
      } else {
        this.display = String(Math.sinh(value));
      }
      
      this.waitingForOperand = true;
    },
    
    calculateCosh() {
      const value = parseFloat(this.display);
      
      if (this.secondMode) {
        // Calculate arccosh
        if (value >= 1) {
          this.display = String(Math.acosh(value));
        } else {
          this.display = 'Error';
        }
      } else {
        this.display = String(Math.cosh(value));
      }
      
      this.waitingForOperand = true;
    },
    
    calculateTanh() {
      const value = parseFloat(this.display);
      
      if (this.secondMode) {
        // Calculate arctanh
        if (value > -1 && value < 1) {
          this.display = String(Math.atanh(value));
        } else {
          this.display = 'Error';
        }
      } else {
        this.display = String(Math.tanh(value));
      }
      
      this.waitingForOperand = true;
    },
    
    toggleDegRad() {
      this.angleMode = this.angleMode === 'DEG' ? 'RAD' : 'DEG';
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
    height: 40px !important;
  }
  
  .display-field {
    font-size: 2.5rem;
  }
}

@media (max-width: 599px) {
  .v-btn {
    min-width: 0;
    padding: 0 4px;
  }
}

/* Visual feedback for keyboard interaction */
.calculator-card:focus-within {
  box-shadow: 0 0 0 2px rgba(var(--v-theme-primary), 0.3) !important;
}

/* Highlight active modes */
.v-btn[color="primary"] {
  background-color: rgb(var(--v-theme-primary)) !important;
  color: white !important;
}
</style>
