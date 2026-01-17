<template>
  <div class="flex items-start h-full">
    <p class="sr-only">{{ label }}</p>
    <Label
      :for="`${id}-input`"
      class="relative border flex items-center justify-center h-full text-sm font-medium uppercase sm:flex-1 cursor-pointer hover:ring-2"
      :class="[classes, disabled && 'pointer-events-none opacity-50']"
    >
      <input
        :id="`${id}-input`"
        type="radio"
        :name="$FormRadioGroup.name"
        class="sr-only"
        :value="innerValue"
        @input="onInput"
      />
      <span :id="id" :class="{ 'text-primary-500': isSelected }">{{ label }}</span>
    </Label>
  </div>
</template>

<script lang="ts">
import Label from '#ioc/atoms/Label'
import FormInput from '#ioc/molecules/FormInput'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Label,
  },
  extends: FormInput,

  inject: ['$FormRadioGroup'],

  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['input'],

  data: () => ({
    checked: false,
  }),

  computed: {
    id() {
      return `${this.name}`
    },
    isSelected() {
      return this.$FormRadioGroup.innerValue === this.value
    },
    classes() {
      if (this.isSelected) {
        return 'rounded-md py-2 px-3 ring-2 ring-primary-500'
      }
      return 'rounded-md py-2 px-3 hover:ring-primary-500'
    },
  },

  methods: {
    onInput() {
      this.$FormRadioGroup.innerValue = this.value
      this.$emit('input')
    },
  },
})
</script>
