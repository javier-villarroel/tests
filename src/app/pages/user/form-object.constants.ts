export const userSections = [
  {
    title: 'Personal Information',
    gridColumns: 4,
    fields: [
      {
        render: 'input',
        props: {
          name: 'firstName',
          label: 'First Name',
          tabIndex: 1,
          placeholder: 'Enter your first name',
          className: 'mt-1' 
        }
      },
      {
        render: 'input',
        props: {
          name: 'firstName',
          label: 'First Name',
          tabIndex: 1,
          placeholder: 'Enter your first name',
          className: 'w-24' 
        }
      },
      {
        render: 'input',
        props: {
          name: 'lastName',
          label: 'Last Name',
          tabIndex: 2,
          placeholder: 'Enter your last name',
          className: 'mt-4' 
        }
      },
      {
        render: 'select',
        props: {
          name: 'gender',
          label: 'Gender',
          tabIndex: 3,
          options: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' }
          ],
          className: 'mt-1' 
        }
      }
    ]
  },
  {
    title: 'Personal Information',
    gridColumns: 2,
    fields: [
      {
        render: 'button',
        props: {
          type: 'type',
          label: "Agregar",
          className: 'w-full' ,
          click: () => {
            console.log('Button clicked');
          }
        }
      },
      {
        render: 'input',
        props: {
          name: 'nombre',
          label: 'First Name',
          tabIndex: 1,
          placeholder: 'Enter your first name',
          className: 'mt-1' 
        }
      },
      {
        render: 'input',
        props: {
          name: 'firstName',
          label: 'First Name',
          tabIndex: 1,
          placeholder: 'Enter your first name',
          className: 'w-24' 
        }
      },
      {
        render: 'input',
        props: {
          name: 'lastName',
          label: 'Last Name',
          tabIndex: 2,
          placeholder: 'Enter your last name',
          className: 'mt-4' 
        }
      },
      {
        render: 'select',
        props: {
          name: 'gender',
          label: 'Gender',
          tabIndex: 3,
          options: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' }
          ],
          className: 'mt-1' 
        }
      }
    ]
  }
];