import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    ButtonModule,
    CardModule,
    DividerModule,
    ProgressSpinnerModule,
    DynamicFieldDirective
  ],
  templateUrl: './form-builder.component.html',
  styles: []
})
export class FormBuilderComponent<T = any> {
  @Input() buttonTitle = "Crear";
  @Input() buttonType: "submit" | "button" = "submit";
  @Input() isLoading = false;
  @Input() disabled = false;
  @Input() buttonClassName = "";
  @Input() card = false;
  @Input() sections: any[] = [];
  @Input() form!: FormGroup;

  @Output() submit = new EventEmitter<T>();

  getGridClass(gridColumns?: number): string {
    const cols = gridColumns || 1;
    switch(cols) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-2';
      case 3: return 'grid-cols-3';
      case 4: return 'grid-cols-4';
      case 5: return 'grid-cols-5';
      case 6: return 'grid-cols-6';
      default: return 'grid-cols-1';
    }
  }

  onSubmitButtonClick() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    }
  }

  onFormSubmit() {
    if (this.buttonType === 'submit' && this.form.valid) {
      this.submit.emit(this.form.value);
    }
  }
}