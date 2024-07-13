import { Component, Input } from '@angular/core';
import { AbstractControl, NgModel } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.scss'],
})
export class ErrorFormComponent {
  formValues: any;
  @Input() minLength: number = 8;
  @Input() maxLength: number = 24;
  @Input() name!: string;
  @Input() control!: AbstractControl | NgModel;
  //@Input() messages: Partial<ErrorsMessages> = {};

  constructor(public readonly translate: TranslateService) {}

  ngOnInit(): void {}
}
