import directus, { readFields, readItems, createItem, updateItem, deleteItem } from './index';

interface FormField {
  field: string;
  type: string;
  required: boolean;
  readonly: boolean;
  options?: any;
  meta?: any;
}

export const getFormFields = async (collection: string): Promise<FormField[]> => {
  const fields = await directus.request(readFields());
  return fields
    .filter((field: any) => field.collection === collection)
    .map((field: any) => ({
      field: field.field,
      type: field.type,
      required: field.meta?.required || false,
      readonly: field.meta?.readonly || false,
      options: field.meta?.options,
      meta: field.meta
    }));
};

export const getCollectionData = async (collection: string, id?: string) => {
  if (id) {
    return await directus.request(readItems(collection, { filter: { id } }));
  }
  return await directus.request(readItems(collection));
};

export const createRecord = async (collection: string, data: any) => {
  return await directus.request(createItem(collection, data));
};

export const updateRecord = async (collection: string, id: string, data: any) => {
  return await directus.request(updateItem(collection, id, data));
};

export const deleteRecord = async (collection: string, id: string) => {
  return await directus.request(deleteItem(collection, id));
};

export const convertToFormFields = (directusFields: any[]): FormField[] => {
  return directusFields.map(field => ({
    field: field.field,
    type: field.type,
    label: field.meta?.display_name || field.field,
    required: field.meta?.required || false,
    readonly: field.meta?.readonly || field.field === 'id',
    placeholder: field.meta?.note,
    interface: field.meta?.interface,
    options: field.meta?.options?.choices?.map((choice: any) => ({
      value: choice.value,
      text: choice.text
    })),
    validation: getValidationRule(field)
  }));
};

function getValidationRule(field: any) {
  return (value: any) => {
    if (field.type === 'string' && field.meta?.validation?.length) {
      const { min, max } = field.meta.validation.length;
      if (min && value.length < min) return `Minimum ${min} characters required`;
      if (max && value.length > max) return `Maximum ${max} characters allowed`;
    }
    if (field.type === 'integer' && field.meta?.validation?.range) {
      const { min, max } = field.meta.validation.range;
      if (min && value < min) return `Minimum value is ${min}`;
      if (max && value > max) return `Maximum value is ${max}`;
    }
    return null;
  };
}