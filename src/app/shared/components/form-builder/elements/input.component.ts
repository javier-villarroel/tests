import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule, CommonModule], 
  template: `
    <div [formGroup]="form" class="w-full">
      <label *ngIf="label" class="block mb-2">{{ label }}</label>
      <input pInputText 
        [formControlName]="name" 
        [type]="type" 
        [placeholder]="placeholder"
        [tabIndex]="tabIndex"
        class="w-full">
      <small *ngIf="hint" class="p-hint">{{ hint }}</small>
    </div>
  `
})
export class InputComponent {
  @Input() form!: FormGroup;
  @Input() name!: string;
  @Input() label?: string;
  @Input() type = 'text';
  @Input() placeholder?: string;
  @Input() hint?: string;
  @Input() tabIndex?: number;
}