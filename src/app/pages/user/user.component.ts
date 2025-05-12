import { Component, OnInit, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilderComponent } from '../../shared/components/form-builder/form-builder.component';
import { DynamicFormService } from '../../core/services/form-builder/form-builder.service';
import { USER_FORM_SECTIONS } from './form-object.constants';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormBuilderComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserFormComponent implements OnInit {
  private dynamicFormService = inject(DynamicFormService);  // lo que antes era constructor

  // constructor(private dynamicFormService: DynamicFormService) {}

  userForm!: FormGroup;
  sections = USER_FORM_SECTIONS;

  ngOnInit(): void {
    this.userForm = this.dynamicFormService.createForm(this.sections);
  }

  onSubmit(formData: any) {
    console.log('Form submitted:', formData);
  }
}