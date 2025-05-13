import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ButtonModule, ProgressSpinnerModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() severity: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' = 'primary';
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() icon: string = '';
  @Input() iconPos: 'left' | 'right' = 'left';
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() rounded: boolean = false;
  @Input() outlined: boolean = false;
  @Input() text: boolean = false;
  @Input() raised: boolean = false;
  @Input() class: string = '';

  @Output() onClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    return [
      this.class,
      this.size === 'small' ? 'p-button-sm' : '',
      this.size === 'large' ? 'p-button-lg' : '',
      this.rounded ? 'rounded-full' : 'rounded-md',
      this.text ? 'p-button-text' : '',
      this.outlined ? 'p-button-outlined' : '',
      this.raised ? 'p-button-raised' : ''
    ].join(' ');
  }

  handleClick(event: Event) {
    if (!this.loading && !this.disabled) {
      this.onClick.emit(event);
    }
  }
}