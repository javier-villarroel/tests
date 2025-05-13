import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [DropdownModule, ReactiveFormsModule, CommonModule],
  template: `
    <div [formGroup]="form" class="w-full">
      <label *ngIf="label" class="block mb-2">{{ label }}</label>
      <p-dropdown 
        [options]="options" 
        [formControlName]="name" 
        [tabIndex]="tabIndex" 
        optionLabel="label" 
        optionValue="value" 
        class="w-full">
      </p-dropdown>
    </div>
  `
})
export class SelectComponent {
  @Input() form!: FormGroup;
  @Input() name!: string;
  @Input() label?: string;
  @Input() options: { value: any; label: string }[] = [];
  @Input() tabIndex?: number;
}