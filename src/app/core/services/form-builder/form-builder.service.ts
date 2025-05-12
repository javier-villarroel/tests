import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicField } from './form-builder.interface';

@Injectable({ providedIn: 'root' })
export class DynamicFormService {
  constructor(private fb: FormBuilder) {}

  createForm(sections: DynamicField[]): FormGroup {
    const formGroup = this.fb.group({});
    
    sections.forEach(field => {
      const validators = [];
      if (field.validation?.required) validators.push(Validators.required);
      if (field.validation?.email) validators.push(Validators.email);
      if (field.validation?.minLength) validators.push(Validators.minLength(field.validation.minLength));
      if (field.validation?.pattern) validators.push(Validators.pattern(field.validation.pattern));
      
      formGroup.addControl(
        field.name,
        this.fb.control(field.defaultValue || '', validators)
      );
    });
    
    return formGroup;
  }
}