import { Directive, ViewContainerRef, ComponentRef, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputComponent } from '../elements/input.component';
import { SelectComponent } from '../elements/select.component';
import { ButtonComponent } from '../elements/button/button.component';


const components: {[key: string]: any} = {
  'input': InputComponent,
  'select': SelectComponent,
  'button': ButtonComponent
};

@Directive({
  selector: '[appDynamicField]',
  standalone: true
})
export class DynamicFieldDirective implements OnChanges, OnInit {
  @Input() fieldConfig!: any;
  @Input() form!: FormGroup;

  private componentRef?: ComponentRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    this.loadComponent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['fieldConfig'] && !changes['fieldConfig'].firstChange) {
      this.loadComponent();
    }
  }

  private loadComponent() {
    if (!this.fieldConfig?.render) return;

    const component = components[this.fieldConfig.render];
    if (!component) return;

    this.viewContainerRef.clear();
    this.componentRef = this.viewContainerRef.createComponent(component);
    
    // Set component inputs
    this.componentRef.instance.form = this.form;
    Object.assign(this.componentRef.instance, this.fieldConfig.props);
  }
}