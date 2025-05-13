export interface DynamicField {
  render: 'input' | 'select' | 'checkbox' | 'textarea' | 'custom';
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