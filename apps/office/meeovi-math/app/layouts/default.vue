<template>
  <v-app :theme="theme">
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ getSectionTitle() }}</v-app-bar-title>
      <logo class="logobrand" />
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleDark()">
        <v-icon>{{ isDark ? 'fas fa-moon' : 'fas fa-sun' }}</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-navigation-drawer v-model="drawer" temporary width="300">
      <v-list>
        <logo class="ma-4" />
        <calculator-menu @section-change="changeSection" />
      </v-list>
    </v-navigation-drawer>
    
    <v-main class="bg-background">
      <div 
        class="calculator-focus-container" 
        tabindex="0" 
        ref="calculatorContainer" 
        @click="focusContainer"
        @keydown="handleKeydown"
        @focus="onContainerFocus"
        @blur="onContainerBlur"
      >
        <v-container fluid class="fill-height pa-0 pa-sm-2">
          <!-- Standard Calculator (default) -->
          <StandardCalculator 
            v-if="currentSection === 'standard'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          
          <!-- Scientific Calculator -->
          <ScientificCalculator 
            v-else-if="currentSection === 'scientific'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          
          <!-- Programmer Calculator -->
          <ProgrammerCalculator 
            v-else-if="currentSection === 'programmer'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          
          <!-- Date Calculation -->
          <DateCalculation 
            v-else-if="currentSection === 'dateCalculation'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          
          <!-- Graphing Calculator -->
          <Graphing 
            v-else-if="currentSection === 'graphing'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          
          <!-- Converters -->
          <CurrencyConverter 
            v-else-if="currentSection === 'currency'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          <VolumeConverter 
            v-else-if="currentSection === 'volume'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          <LengthConverter 
            v-else-if="currentSection === 'length'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          <WeightMassConverter 
            v-else-if="currentSection === 'weightMass'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          <TemperatureConverter 
            v-else-if="currentSection === 'temperature'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          <EnergyConverter 
            v-else-if="currentSection === 'energy'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          <AreaConverter 
            v-else-if="currentSection === 'area'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          <SpeedConverter 
            v-else-if="currentSection === 'speed'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          <TimeConverter 
            v-else-if="currentSection === 'time'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          <PowerConverter 
            v-else-if="currentSection === 'power'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          <DataConverter 
            v-else-if="currentSection === 'data'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          <PressureConverter 
            v-else-if="currentSection === 'pressure'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
          <AngleConverter 
            v-else-if="currentSection === 'angle'" 
            class="full-height-component" 
            ref="activeCalculator"
            @focus-request="focusContainer"
          />
        </v-container>
      </div>
    </v-main>
    
    <v-footer app class="d-flex flex-column">
      <div class="text-center">
        © {{ new Date().getFullYear() }} Meeovi Math
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { useTheme } from 'vuetify'
import logo from '../components/blocks/logo.vue'
import calculatorMenu from '../components/menus/calculatormenu.vue'

const theme = useTheme()
const isDark = useDark()
const toggleDark = useToggle(isDark)

// Sync Vuetify theme with dark mode
watch(isDark, (dark) => {
  theme.global.name.value = dark ? 'dark' : 'light'
}, {
  immediate: true
})

// Calculator state
const drawer = ref(false)
const currentSection = ref('standard')
const calculatorContainer = ref(null)
const activeCalculator = ref(null)
const isContainerFocused = ref(false)

// Keyboard event handler
function handleKeydown(event) {
  // Don't handle keyboard events if drawer is open or if focus is on input elements
  if (drawer.value) return
  
  const target = event.target
  if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
    return
  }

  // Pass the keyboard event to the active calculator/converter
  if (activeCalculator.value && typeof activeCalculator.value.handleKeyboard === 'function') {
    const handled = activeCalculator.value.handleKeyboard(event)
    if (handled) {
      event.preventDefault()
      event.stopPropagation()
    }
  } else {
    // Fallback: handle common calculator keys
    handleCommonKeys(event)
  }
}

// Handle common calculator keys as fallback
function handleCommonKeys(event) {
  const key = event.key
  
  // Numbers and basic operators
  if (/^[0-9+\-*/.=]$/.test(key) || key === 'Enter') {
    if (activeCalculator.value && typeof activeCalculator.value.handleInput === 'function') {
      const inputKey = key === 'Enter' ? '=' : key
      activeCalculator.value.handleInput(inputKey)
      event.preventDefault()
    }
  }
  
  // Backspace/Delete
  else if (key === 'Backspace' || key === 'Delete') {
    if (activeCalculator.value && typeof activeCalculator.value.handleBackspace === 'function') {
      activeCalculator.value.handleBackspace()
      event.preventDefault()
    }
  }
  
  // Clear (Escape or 'c')
  else if (key === 'Escape' || key.toLowerCase() === 'c') {
    if (activeCalculator.value && typeof activeCalculator.value.handleClear === 'function') {
      activeCalculator.value.handleClear()
      event.preventDefault()
    }
  }
}

// Focus management
function focusContainer() {
  nextTick(() => {
    try {
      const element = calculatorContainer.value
      if (element && typeof element.focus === 'function') {
        element.focus()
        isContainerFocused.value = true
      }
    } catch (error) {
      console.warn('Could not focus calculator container:', error)
    }
  })
}

function onContainerFocus() {
  isContainerFocused.value = true
}

function onContainerBlur() {
  isContainerFocused.value = false
}

// Global keyboard event listener as backup
function handleGlobalKeydown(event) {
  // Only handle if our container should have focus and no input is focused
  if (!isContainerFocused.value && !drawer.value) {
    const activeElement = document.activeElement
    if (!activeElement || activeElement === document.body || activeElement === calculatorContainer.value) {
      focusContainer()
      handleKeydown(event)
    }
  }
}

// Focus the container when the component is mounted
onMounted(() => {
  focusContainer()
  // Add global keyboard listener as backup
  document.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleGlobalKeydown)
})

// Refocus when section changes
watch(currentSection, () => {
  nextTick(() => {
    focusContainer()
  })
})

// Change calculator section
function changeSection(section) {
  currentSection.value = section
  drawer.value = false
  // Focus after section change
  nextTick(() => {
    focusContainer()
  })
}

// Get section title
function getSectionTitle() {
  const titles = {
    standard: 'Standard Calculator',
    scientific: 'Scientific Calculator',
    programmer: 'Programmer Calculator',
    dateCalculation: 'Date Calculation',
    graphing: 'Graphing Calculator',
    currency: 'Currency Converter',
    volume: 'Volume Converter',
    length: 'Length Converter',
    weightMass: 'Weight and Mass Converter',
    temperature: 'Temperature Converter',
    energy: 'Energy Converter',
    area: 'Area Converter',
    speed: 'Speed Converter',
    time: 'Time Converter',
    power: 'Power Converter',
    data: 'Data Converter',
    pressure: 'Pressure Converter',
    angle: 'Angle Converter'
  }
  
  return titles[currentSection.value] || 'Calculator'
}

useHead({
  title: 'Meeovi Math',
  htmlAttrs: {
    // uncomment this line to simulate dark mode
    // class: 'dark',
  },
})
</script>

<style>
.v-main {
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.v-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-height-component {
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}

@media (min-width: 600px) {
  .full-height-component {
    max-width: 800px;
    margin: 0 auto;
  }
}

.calculator-focus-container {
  width: 100%;
  height: 100%;
  outline: none;
  position: relative;
}

.calculator-focus-container:focus {
  outline: 2px solid rgba(var(--v-theme-primary), 0.3);
  outline-offset: -2px;
}

/* Ensure keyboard focus is visible */
.calculator-focus-container:focus-visible {
  outline: 2px solid rgb(var(--v-theme-primary));
  outline-offset: -2px;
}
</style>
