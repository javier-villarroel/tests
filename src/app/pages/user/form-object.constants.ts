import { DynamicField } from "../../core/services/form-builder/form-builder.interface";

export const USER_FORM_SECTIONS: DynamicField[] = [
  {
    type: 'input',
    name: 'username',
    label: 'Username',
    placeholder: 'Enter your username',
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    type: 'input',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    validation: {
      required: true,
      email: true,
    },
  },
  {
    type: 'select',
    name: 'role',
    label: 'User Role',
    options: [
      { value: 'admin', label: 'Administrator' },
      { value: 'user', label: 'Regular User' },
    ],
    validation: {
      required: true,
    },
  },
];