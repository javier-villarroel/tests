import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilderComponent } from '../../shared/components/form-builder/form-builder.component';
import { userSections } from './form-object.constants';
import { FormPageWrapperComponent } from '../../shared/components/form-page-wrapper/form-page-wrapper.component';
import { TableComponent } from '../../shared/components/form-builder/elements/table/table.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormBuilderComponent, FormPageWrapperComponent,TableComponent],
  templateUrl: './user.component.html',
})
export class UserFormComponent { 
  form: FormGroup;
  sections = userSections; 

columns = [
  { field: 'name', header: 'Nombre', width: '25%', type: 'text' },
  { field: 'country.name', header: 'País', width: '20%', type: 'text' },
  { field: 'representative.name', header: 'Representante', width: '20%', type: 'text' },
  { field: 'status', header: 'Estado', width: '15%', type: 'status' },
  { field: 'verified', header: 'Verificado', width: '10%', type: 'boolean' }
];

data = [
  {
    id: 1,
    name: 'John Doe',
    country: { name: 'USA', code: 'us' },
    representative: { name: 'Agent Smith', image: 'agent-smith.png' },
    status: 'active',
    verified: true
  },
  {
    id: 2,
    name: 'pedro',
    country: { name: 'COLOMBIA', code: 'col' },
    representative: { name: 'pedrito', image: 'agent-smith.png' },
    status: 'inactive',
    verified: false
  },
  {
    id: 3,
    name: 'lorman',
    country: { name: 'MEXICO', code: 'mex' },
    representative: { name: 'lorman', image: 'agent-smith.png' },
    status: 'active',
    verified: true
  },
];
  
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nombre: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log('data:', this.data);
  }

  onRowSelect(event: any) {
    console.log('Fila seleccionada:', event);
  }

  onRowAction(event: any) {
    console.log('Acción:', event.action, 'Datos:', event.data);
  }

  onSubmit(values: any) {
    console.log('Form submitted:', values);
    // Handle form submission
  }

  save(){
    
  }
}