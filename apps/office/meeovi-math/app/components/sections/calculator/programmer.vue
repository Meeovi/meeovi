<template>
  <v-card class="calculator-card programmer-calculator" elevation="3">
    <v-card-text>
      <v-text-field
        v-model="display"
        readonly
        class="display-field"
        variant="outlined"
        hide-details
      ></v-text-field>
      
      <div class="number-systems mt-2">
        <v-row dense>
          <v-col cols="3" class="text-right">
            <div class="number-label">HEX</div>
          </v-col>
          <v-col cols="9">
            <v-text-field
              v-model="hexValue"
              readonly
              variant="outlined"
              density="compact"
              hide-details
              class="number-field"
            ></v-text-field>
          </v-col>
        </v-row>
        
        <v-row dense class="mt-1">
          <v-col cols="3" class="text-right">
            <div class="number-label">DEC</div>
          </v-col>
          <v-col cols="9">
            <v-text-field
              v-model="decValue"
              readonly
              variant="outlined"
              density="compact"
              hide-details
              class="number-field"
            ></v-text-field>
          </v-col>
        </v-row>
        
        <v-row dense class="mt-1">
          <v-col cols="3" class="text-right">
            <div class="number-label">OCT</div>
          </v-col>
          <v-col cols="9">
            <v-text-field
              v-model="octValue"
              readonly
              variant="outlined"
              density="compact"
              hide-details
              class="number-field"
            ></v-text-field>
          </v-col>
        </v-row>
        
        <v-row dense class="mt-1">
          <v-col cols="3" class="text-right">
            <div class="number-label">BIN</div>
          </v-col>
          <v-col cols="9">
            <v-text-field
              v-model="binValue"
              readonly
              variant="outlined"
              density="compact"
              hide-details
              class="number-field"
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
      
      <v-radio-group v-model="wordSize" inline class="mt-2" hide-details>
        <v-radio label="QWORD (64-bit)" value="64"></v-radio>
        <v-radio label="DWORD (32-bit)" value="32"></v-radio>
        <v-radio label="WORD (16-bit)" value="16"></v-radio>
        <v-radio label="BYTE (8-bit)" value="8"></v-radio>
      </v-radio-group>
      
      <v-radio-group v-model="numberSystem" inline class="mt-2" hide-details>
        <v-radio label="HEX" value="hex"></v-radio>
        <v-radio label="DEC" value="dec"></v-radio>
        <v-radio label="OCT" value="oct"></v-radio>
        <v-radio label="BIN" value="bin"></v-radio>
      </v-radio-group>
      
      <v-row dense class="mt-4">
        <v-col cols="3">
          <v-btn block @click="bitOperation('AND')" :disabled="!isOperationEnabled('A-F')">AND</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="bitOperation('OR')" :disabled="!isOperationEnabled('A-F')">OR</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="bitOperation('NOT')" :disabled="!isOperationEnabled('A-F')">NOT</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="bitOperation('XOR')" :disabled="!isOperationEnabled('A-F')">XOR</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="3">
          <v-btn block @click="bitShift('<<')" :disabled="!isOperationEnabled('A-F')"><<</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="bitShift('>>')" :disabled="!isOperationEnabled('A-F')">>></v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="clearEntry">CE</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="clear">C</v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="3">
          <v-btn block @click="addHexDigit('A')" :disabled="!isOperationEnabled('A-F')">A</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addHexDigit('B')" :disabled="!isOperationEnabled('A-F')">B</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addHexDigit('C')" :disabled="!isOperationEnabled('A-F')">C</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="backspace">
            <v-icon>mdi-backspace</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      
      <v-row dense class="mt-1">
        <v-col cols="3">
          <v-btn block @click="addHexDigit('D')" :disabled="!isOperationEnabled('A-F')">D</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addHexDigit('E')" :disabled="!isOperationEnabled('A-F')">E</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addHexDigit('F')" :disabled="!isOperationEnabled('A-F')">F</v-btn>
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
          <v-btn block @click="addDigit('8')" :disabled="!isOperationEnabled('8-9')">8</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="addDigit('9')" :disabled="!isOperationEnabled('8-9')">9</v-btn>
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
          <v-btn block @click="modOperation">Mod</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn block @click="calculate" color="success">=</v-btn>
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
      hexValue: '0',
      decValue: '0',
      octValue: '0',
      binValue: '0',
      previousValue: null,
      currentOperator: null,
      waitingForOperand: false,
      lastButtonWasEquals: false,
      wordSize: '32',
      numberSystem: 'dec'
    }
  },
  mounted() {
    // Request focus when component is mounted
    this.$emit('focus-request')
  },
  watch: {
    wordSize() {
      this.updateDisplays();
    },
    numberSystem() {
      this.updateDisplays();
    }
  },
  methods: {
    // Keyboard handling method called by parent
    handleKeyboard(event) {
      const key = event.key.toLowerCase()
      
      // Handle numeric keys based on number system
      if (/^[0-9]$/.test(event.key)) {
        const digit = parseInt(event.key)
        if (
          (this.numberSystem === 'bin' && digit <= 1) ||
          (this.numberSystem === 'oct' && digit <= 7) ||
          (this.numberSystem === 'dec' || this.numberSystem === 'hex')
        ) {
          this.addDigit(event.key)
          return true
        }
      }
      // Handle hex digits
      else if (/^[a-f]$/i.test(event.key)) {
        if (this.numberSystem === 'hex') {
          this.addHexDigit(event.key.toUpperCase())
          return true
        }
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
      // Handle modulo
      else if (event.key === '%') {
        this.modOperation()
        return true
      }
      // Handle bitwise operations
      else if (event.key === '&') {
        this.bitOperation('AND')
        return true
      }
      else if (event.key === '|') {
        this.bitOperation('OR')
        return true
      }
      else if (event.key === '^') {
        this.bitOperation('XOR')
        return true
      }
      else if (event.key === '~') {
        this.bitOperation('NOT')
        return true
      }
      // Handle bit shifts
      else if (event.key === '<' && event.shiftKey) {
        this.bitShift('<<')
        return true
      }
      else if (event.key === '>' && event.shiftKey) {
        this.bitShift('>>')
        return true
      }
      // Handle number system switching (Ctrl + key)
      else if (event.ctrlKey) {
        if (key === 'h') {
          this.numberSystem = 'hex'
          return true
        } else if (key === 'd') {
          this.numberSystem = 'dec'
          return true
        } else if (key === 'o') {
          this.numberSystem = 'oct'
          return true
        } else if (key === 'b') {
          this.numberSystem = 'bin'
          return true
        }
        // Word size switching
        else if (key === '1') {
          this.wordSize = '8'
          return true
        } else if (key === '2') {
          this.wordSize = '16'
          return true
        } else if (key === '3') {
          this.wordSize = '32'
          return true
        } else if (key === '4') {
          this.wordSize = '64'
          return true
        }
      }
      
      return false // Key not handled
    },

    // Alternative methods for parent to call directly
    handleInput(value) {
      if (/^[0-9]$/.test(value)) {
        const digit = parseInt(value)
        if (
          (this.numberSystem === 'bin' && digit <= 1) ||
          (this.numberSystem === 'oct' && digit <= 7) ||
          (this.numberSystem === 'dec' || this.numberSystem === 'hex')
        ) {
          this.addDigit(value)
        }
      } else if (/^[a-f]$/i.test(value) && this.numberSystem === 'hex') {
        this.addHexDigit(value.toUpperCase())
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
      if (this.numberSystem === 'oct' && parseInt(digit) >= 8) {
        return; // Octal doesn't allow 8 or 9
      }
      
      if (this.numberSystem === 'bin' && parseInt(digit) > 1) {
        return; // Binary only allows 0 and 1
      }
      
      if (this.waitingForOperand || this.display === '0' || this.lastButtonWasEquals) {
        this.display = digit;
        this.waitingForOperand = false;
        this.lastButtonWasEquals = false;
      } else {
        this.display += digit;
      }
      
      this.updateDisplays();
    },
    
    addHexDigit(digit) {
      if (this.numberSystem !== 'hex') {
        return; // Only allow hex digits in hex mode
      }
      
      if (this.waitingForOperand || this.display === '0' || this.lastButtonWasEquals) {
        this.display = digit;
        this.waitingForOperand = false;
        this.lastButtonWasEquals = false;
      } else {
        this.display += digit;
      }
      
      this.updateDisplays();
    },
    
    addOperator(operator) {
      let inputValue;
      
      switch (this.numberSystem) {
        case 'hex':
          inputValue = parseInt(this.display, 16);
          break;
        case 'dec':
          inputValue = parseInt(this.display, 10);
          break;
        case 'oct':
          inputValue = parseInt(this.display, 8);
          break;
        case 'bin':
          inputValue = parseInt(this.display, 2);
          break;
      }
      
      if (this.previousValue === null) {
        this.previousValue = inputValue;
      } else if (this.currentOperator && !this.waitingForOperand) {
        const result = this.performCalculation(this.previousValue, inputValue, this.currentOperator);
        this.setDisplayValue(result);
        this.previousValue = result;
      }
      
      this.waitingForOperand = true;
      this.currentOperator = operator;
      this.lastButtonWasEquals = false;
    },
    
    calculate() {
      let inputValue;
      
      switch (this.numberSystem) {
        case 'hex':
          inputValue = parseInt(this.display, 16);
          break;
        case 'dec':
          inputValue = parseInt(this.display, 10);
          break;
        case 'oct':
          inputValue = parseInt(this.display, 8);
          break;
        case 'bin':
          inputValue = parseInt(this.display, 2);
          break;
      }
      
      if (this.previousValue !== null && this.currentOperator) {
        const result = this.performCalculation(this.previousValue, inputValue, this.currentOperator);
        this.setDisplayValue(result);
        this.previousValue = null;
        this.currentOperator = null;
        this.waitingForOperand = true;
        this.lastButtonWasEquals = true;
      }
    },
    
    performCalculation(a, b, operator) {
      switch (operator) {
        case '+': return this.applyWordSize(a + b);
        case '-': return this.applyWordSize(a - b);
        case '*': return this.applyWordSize(a * b);
        case '/': return b !== 0 ? this.applyWordSize(Math.floor(a / b)) : 'Error';
        case '%': return b !== 0 ? this.applyWordSize(a % b) : 'Error';
        case '&': return this.applyWordSize(a & b);
        case '|': return this.applyWordSize(a | b);
        case '^': return this.applyWordSize(a ^ b);
        case '<<': return this.applyWordSize(a << b);
        case '>>': return this.applyWordSize(a >> b);
        default: return b;
      }
    },
    
    applyWordSize(value) {
      if (typeof value === 'string') return value;
      
      const size = parseInt(this.wordSize);
      
      if (size === 64) {
        // For 64-bit, we need to be careful with JavaScript's number limitations
        // This is a simplified approach that works for most cases
        return value & Number.MAX_SAFE_INTEGER;
      } else {
        // For smaller sizes, use regular bitwise operations
        const mask = (1 << size) - 1;
        return value & mask;
      }
    },
    
    clear() {
      this.display = '0';
      this.previousValue = null;
      this.currentOperator = null;
      this.waitingForOperand = false;
      this.lastButtonWasEquals = false;
      this.updateDisplays();
    },
    
    clearEntry() {
      this.display = '0';
      this.waitingForOperand = false;
      this.updateDisplays();
    },
    
    backspace() {
      if (this.waitingForOperand || this.lastButtonWasEquals) return;
      
      this.display = this.display.length > 1 ? 
        this.display.substring(0, this.display.length - 1) : '0';
      this.updateDisplays();
    },
    
    toggleSign() {
      let value;
      
      switch (this.numberSystem) {
        case 'hex':
          value = parseInt(this.display, 16);
          break;
        case 'dec':
          value = parseInt(this.display, 10);
          break;
        case 'oct':
          value = parseInt(this.display, 8);
          break;
        case 'bin':
          value = parseInt(this.display, 2);
          break;
      }
      
      value = this.applyWordSize(-value);
      this.setDisplayValue(value);
    },
    
    bitOperation(operation) {
      let value;
      
      switch (this.numberSystem) {
        case 'hex':
          value = parseInt(this.display, 16);
          break;
        case 'dec':
          value = parseInt(this.display, 10);
          break;
        case 'oct':
          value = parseInt(this.display, 8);
          break;
        case 'bin':
          value = parseInt(this.display, 2);
          break;
      }
      
      switch (operation) {
        case 'AND':
          this.addOperator('&');
          break;
        case 'OR':
          this.addOperator('|');
          break;
        case 'NOT':
          value = this.applyWordSize(~value);
          this.setDisplayValue(value);
          break;
        case 'XOR':
          this.addOperator('^');
          break;
      }
    },
    
    bitShift(direction) {
      this.addOperator(direction);
    },
    
    modOperation() {
      this.addOperator('%');
    },
    
    setDisplayValue(value) {
      if (value === 'Error') {
        this.display = 'Error';
        this.hexValue = 'Error';
        this.decValue = 'Error';
        this.octValue = 'Error';
        this.binValue = 'Error';
        return;
      }
      
      // Ensure value is positive for display purposes
      const unsignedValue = value >>> 0;
      
      // Update all number system displays
      this.hexValue = unsignedValue.toString(16).toUpperCase();
      this.decValue = value.toString(10);
      this.octValue = unsignedValue.toString(8);
      this.binValue = unsignedValue.toString(2);
      
      // Update main display based on current number system
      switch (this.numberSystem) {
        case 'hex':
          this.display = this.hexValue;
          break;
        case 'dec':
          this.display = this.decValue;
          break;
        case 'oct':
          this.display = this.octValue;
          break;
        case 'bin':
          this.display = this.binValue;
          break;
      }
    },
    
    updateDisplays() {
      let value;
      
      try {
        switch (this.numberSystem) {
          case 'hex':
            value = parseInt(this.display, 16) || 0;
            break;
          case 'dec':
            value = parseInt(this.display, 10) || 0;
            break;
          case 'oct':
            value = parseInt(this.display, 8) || 0;
            break;
          case 'bin':
            value = parseInt(this.display, 2) || 0;
            break;
        }
        
        this.setDisplayValue(this.applyWordSize(value));
      } catch (error) {
        // Handle invalid input
        this.setDisplayValue(0);
      }
    },
    
    isOperationEnabled(range) {
      switch (range) {
        case 'A-F':
          return this.numberSystem === 'hex';
        case '8-9':
          return this.numberSystem === 'hex' || this.numberSystem === 'dec';
        default:
          return true;
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

.number-systems {
  margin-bottom: 16px;
}

.number-label {
  font-weight: bold;
  padding-top: 8px;
}

.number-field {
  font-family: monospace;
}

/* Make buttons larger on bigger screens */
@media (min-width: 600px) {
  .v-btn {
    height: 48px !important;
  }
  
  .display-field {
    font-size: 2.5rem;
  }
}

/* Visual feedback for keyboard interaction */
.calculator-card:focus-within {
  box-shadow: 0 0 0 2px rgba(var(--v-theme-primary), 0.3) !important;
}

/* Disabled button styling */
.v-btn:disabled {
  opacity: 0.4 !important;
}

/* Radio group styling */
.v-radio-group {
  margin-bottom: 8px;
}

.v-radio {
  margin-right: 16px;
}
</style>
