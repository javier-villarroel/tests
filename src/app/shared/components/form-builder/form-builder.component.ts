import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DynamicField } from '../../../core/services/form-builder/form-builder.interface';

@Component({
  selector: 'form-builder',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessageModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent {
  @Input() sections: DynamicField[] = [];
  @Input() form: FormGroup = new FormGroup({});
  @Input() customClass: string = ''; 
  @Output() formSubmit = new EventEmitter<any>();

  getControl(name: string) {
    return this.form.get(name);
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }
}