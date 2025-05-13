import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilderComponent } from '../../shared/components/form-builder/form-builder.component';
import { userSections } from './form-object.constants';
import { FormPageWrapperComponent } from '../../shared/components/form-page-wrapper/form-page-wrapper.component';
import { ButtonComponent } from '../../shared/components/form-builder/elements/button/button.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormBuilderComponent, FormPageWrapperComponent, ButtonComponent],
  templateUrl: './user.component.html',
})
export class UserFormComponent { 
  form: FormGroup;
  sections = userSections; 
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nombre: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  onSubmit(values: any) {
    console.log('Form submitted:', values);
    // Handle form submission
  }

  save(){
    
  }
}