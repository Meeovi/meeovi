<template>
  <div>
    <v-list>
      <v-list-subheader>Calculator</v-list-subheader>
      <v-list-item title="Standard" @click="$emit('section-change', 'standard')"></v-list-item>
      <v-list-item title="Scientific" @click="$emit('section-change', 'scientific')"></v-list-item>
      <v-list-item title="Programmer" @click="$emit('section-change', 'programmer')"></v-list-item>
      <v-list-item title="Date Calculation" @click="$emit('section-change', 'dateCalculation')"></v-list-item>
      <v-list-item title="Graphing" @click="$emit('section-change', 'graphing')"></v-list-item>
      
      <v-divider></v-divider>
      <v-list-subheader>Converter</v-list-subheader>
      
      <v-list-item title="Currency" @click="$emit('section-change', 'currency')"></v-list-item>
      <v-list-item title="Volume" @click="$emit('section-change', 'volume')"></v-list-item>
      <v-list-item title="Length" @click="$emit('section-change', 'length')"></v-list-item>
      <v-list-item title="Weight and Mass" @click="$emit('section-change', 'weightMass')"></v-list-item>
      <v-list-item title="Temperature" @click="$emit('section-change', 'temperature')"></v-list-item>
      <v-list-item title="Energy" @click="$emit('section-change', 'energy')"></v-list-item>
      <v-list-item title="Area" @click="$emit('section-change', 'area')"></v-list-item>
      <v-list-item title="Speed" @click="$emit('section-change', 'speed')"></v-list-item>
      <v-list-item title="Time" @click="$emit('section-change', 'time')"></v-list-item>
      <v-list-item title="Power" @click="$emit('section-change', 'power')"></v-list-item>
      <v-list-item title="Data" @click="$emit('section-change', 'data')"></v-list-item>
      <v-list-item title="Pressure" @click="$emit('section-change', 'pressure')"></v-list-item>
      <v-list-item title="Angle" @click="$emit('section-change', 'angle')"></v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'CalculatorMenu',
  emits: ['section-change']
}
</script>