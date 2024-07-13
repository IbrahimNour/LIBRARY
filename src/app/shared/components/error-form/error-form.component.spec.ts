import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFormComponent } from './error-form.component';
import { TranslateService } from '@ngx-translate/core';
import {
  ReactiveFormsModule,
  FormsModule,
  NgModel,
  AbstractControl,
} from '@angular/forms';

describe('ErrorFormComponent', () => {
  let component: ErrorFormComponent;
  let fixture: ComponentFixture<ErrorFormComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorFormComponent, ReactiveFormsModule, FormsModule],
      providers: [TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have default minLength set to 8', () => {
    expect(component.minLength).toEqual(8);
  });

  it('should have default maxLength set to 24', () => {
    expect(component.maxLength).toEqual(24);
  });

  it('should have messages input set', () => {
    const messages = { required: 'This field is required' };
    component.messages = messages;
    fixture.detectChanges();

    expect(component.messages).toEqual(messages);
  });
});
