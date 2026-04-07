import { Form as FormBase } from './Form';
import { FormItem } from './FormItem';
import { useFormContext, useFormInstance } from './context';
import { useForm } from './hooks/useForm';
import { useFormCore } from './hooks/useFormCore';
import type { FormComponent } from './interface';

const Form = Object.assign(FormBase, {
  Item: FormItem,
  useForm,
  useFormContext,
  useFormInstance,
  useFormCore,
}) as unknown as FormComponent;

export { Form, FormItem, useForm, useFormContext, useFormInstance, useFormCore };
export default Form;
export * from './interface';
export * from './constants';
