export interface DynamicField {
  type: 'input' | 'select' | 'checkbox' | 'textarea';
  name: string;
  label: string;
  placeholder?: string;
  validation?: {
    required?: boolean;
    email?: boolean;
    minLength?: number;
    pattern?: string;
  };
  options?: { value: any; label: string }[];
  defaultValue?: any;
}