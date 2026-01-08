// Import Vue utilities
import { defineAsyncComponent } from 'vue'

// Import calculator components
import StandardCalculator from '../components/sections/calculator/standard.vue'
import ScientificCalculator from '../components/sections/calculator/scientific.vue'

// Import converter components
import CurrencyConverter from '../components/sections/converter/currency.vue'
import TemperatureConverter from '../components/sections/converter/temperature.vue'
import LengthConverter from '../components/sections/converter/length.vue'

export default defineNuxtPlugin((nuxtApp) => {
  // Register calculator components
  nuxtApp.vueApp.component('StandardCalculator', StandardCalculator)
  nuxtApp.vueApp.component('ScientificCalculator', ScientificCalculator)
  
  // Register existing calculator components
  nuxtApp.vueApp.component('ProgrammerCalculator', defineAsyncComponent(() => 
    import('../components/sections/calculator/programmer.vue')
  ))
  nuxtApp.vueApp.component('DateCalculation', defineAsyncComponent(() => 
    import('../components/sections/calculator/dateCalculation.vue')
  ))
  nuxtApp.vueApp.component('Graphing', defineAsyncComponent(() => 
    import('../components/sections/calculator/graphing.vue')
  ))
  
  // Register converter components
  nuxtApp.vueApp.component('CurrencyConverter', CurrencyConverter)
  nuxtApp.vueApp.component('TemperatureConverter', TemperatureConverter)
  nuxtApp.vueApp.component('LengthConverter', LengthConverter)
  
  // Register existing converter components
  nuxtApp.vueApp.component('VolumeConverter', defineAsyncComponent(() => 
    import('../components/sections/converter/volume.vue')
  ))
  nuxtApp.vueApp.component('WeightMassConverter', defineAsyncComponent(() => 
    import('../components/sections/converter/weightMass.vue')
  ))
  nuxtApp.vueApp.component('EnergyConverter', defineAsyncComponent(() => 
    import('../components/sections/converter/energy.vue')
  ))
  nuxtApp.vueApp.component('AreaConverter', defineAsyncComponent(() => 
    import('../components/sections/converter/area.vue')
  ))
  nuxtApp.vueApp.component('SpeedConverter', defineAsyncComponent(() => 
    import('../components/sections/converter/speed.vue')
  ))
  nuxtApp.vueApp.component('TimeConverter', defineAsyncComponent(() => 
    import('../components/sections/converter/time.vue')
  ))
  nuxtApp.vueApp.component('PowerConverter', defineAsyncComponent(() => 
    import('../components/sections/converter/power.vue')
  ))
  nuxtApp.vueApp.component('DataConverter', defineAsyncComponent(() => 
    import('../components/sections/converter/data.vue')
  ))
  nuxtApp.vueApp.component('PressureConverter', defineAsyncComponent(() => 
    import('../components/sections/converter/pressure.vue')
  ))
  nuxtApp.vueApp.component('AngleConverter', defineAsyncComponent(() => 
    import('../components/sections/converter/angle.vue')
  ))
})