<template>
  <form @submit.prevent="handleSubmit" class="dynamic-form">
    <div v-for="field in fields" :key="field.field" class="form-field">
      <label :for="field.field">
        {{ field.label || field.field }}
        <span v-if="field.required" class="required">*</span>
      </label>

      <!-- Text Input -->
      <input
        v-if="field.type === 'string' || field.type === 'text'"
        :id="field.field"
        v-model="formData[field.field]"
        type="text"
        :required="field.required"
        :readonly="field.readonly"
        :placeholder="field.placeholder"
      />

      <!-- Number Input -->
      <input
        v-else-if="field.type === 'integer' || field.type === 'float'"
        :id="field.field"
        v-model="formData[field.field]"
        type="number"
        :required="field.required"
        :readonly="field.readonly"
      />

      <!-- Email Input -->
      <input
        v-else-if="field.type === 'email'"
        :id="field.field"
        v-model="formData[field.field]"
        type="email"
        :required="field.required"
        :readonly="field.readonly"
      />

      <!-- Password Input -->
      <input
        v-else-if="field.type === 'password'"
        :id="field.field"
        v-model="formData[field.field]"
        type="password"
        :required="field.required"
        :readonly="field.readonly"
      />

      <!-- Textarea -->
      <textarea
        v-else-if="field.type === 'text' && field.interface === 'textarea'"
        :id="field.field"
        v-model="formData[field.field]"
        :required="field.required"
        :readonly="field.readonly"
        :placeholder="field.placeholder"
      ></textarea>

      <!-- Select Dropdown -->
      <select
        v-else-if="field.type === 'string' && field.options"
        :id="field.field"
        v-model="formData[field.field]"
        :required="field.required"
        :disabled="field.readonly"
      >
        <option value="">Select...</option>
        <option
          v-for="option in field.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>

      <!-- Checkbox -->
      <input
        v-else-if="field.type === 'boolean'"
        :id="field.field"
        v-model="formData[field.field]"
        type="checkbox"
        :disabled="field.readonly"
      />

      <!-- File Upload -->
      <input
        v-else-if="field.type === 'uuid' && field.interface === 'file'"
        :id="field.field"
        type="file"
        :required="field.required"
        :disabled="field.readonly"
        @change="handleFileUpload($event, field.field)"
      />

      <!-- Date Input -->
      <input
        v-else-if="field.type === 'date' || field.type === 'datetime'"
        :id="field.field"
        v-model="formData[field.field]"
        :type="field.type === 'datetime' ? 'datetime-local' : 'date'"
        :required="field.required"
        :readonly="field.readonly"
      />

      <!-- Default Text Input -->
      <input
        v-else
        :id="field.field"
        v-model="formData[field.field]"
        type="text"
        :required="field.required"
        :readonly="field.readonly"
      />

      <div v-if="errors[field.field]" class="error">
        {{ errors[field.field] }}
      </div>
    </div>

    <div class="form-actions">
      <button type="submit" :disabled="loading">
        {{ loading ? 'Saving...' : (isEdit ? 'Update' : 'Create') }}
      </button>
      <button type="button" @click="$emit('cancel')" v-if="showCancel">
        Cancel
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';

interface FormField {
  field: string;
  type: string;
  label?: string;
  required?: boolean;
  readonly?: boolean;
  placeholder?: string;
  interface?: string;
  options?: Array<{ value: any; text: string }>;
  validation?: (value: any) => string | null;
}

interface Props {
  fields: FormField[];
  initialData?: Record<string, any>;
  loading?: boolean;
  showCancel?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  initialData: () => ({}),
  loading: false,
  showCancel: true
});

const emit = defineEmits<{
  submit: [data: Record<string, any>];
  cancel: [];
}>();

const formData = reactive<Record<string, any>>({});
const errors = ref<Record<string, string>>({});

const isEdit = computed(() => Object.keys(props.initialData).length > 0);

// Initialize form data
watch(() => props.fields, (newFields) => {
  newFields.forEach(field => {
    if (!(field.field in formData)) {
      formData[field.field] = props.initialData[field.field] || getDefaultValue(field.type);
    }
  });
}, { immediate: true });

watch(() => props.initialData, (newData) => {
  Object.assign(formData, newData);
}, { immediate: true });

function getDefaultValue(type: string) {
  switch (type) {
    case 'boolean': return false;
    case 'integer':
    case 'float': return 0;
    case 'array': return [];
    default: return '';
  }
}

function validateForm(): boolean {
  errors.value = {};
  let isValid = true;

  props.fields.forEach(field => {
    if (field.required && !formData[field.field]) {
      errors.value[field.field] = `${field.label || field.field} is required`;
      isValid = false;
    }

    if (field.validation && formData[field.field]) {
      const validationError = field.validation(formData[field.field]);
      if (validationError) {
        errors.value[field.field] = validationError;
        isValid = false;
      }
    }
  });

  return isValid;
}

function handleSubmit() {
  if (validateForm()) {
    emit('submit', { ...formData });
  }
}

function handleFileUpload(event: Event, fieldName: string) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    formData[fieldName] = file;
  }
}
</script>

<style scoped>
.dynamic-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-field {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.required {
  color: red;
}

input, textarea, select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

input[type="checkbox"] {
  width: auto;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button[type="submit"] {
  background: #007bff;
  color: white;
}

button[type="submit"]:disabled {
  background: #ccc;
  cursor: not-allowed;
}

button[type="button"] {
  background: #6c757d;
  color: white;
}
</style>