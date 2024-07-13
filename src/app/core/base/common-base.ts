import { Directive, OnDestroy } from '@angular/core';
import { FormGroup, UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
@Directive({
  selector: '[appComponentBase]',
})
export abstract class ComponentBase implements OnDestroy {
  destroy$ = new Subject<void>();
  loading: boolean = false;
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  markControlAsToushed(form: FormGroup): void {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof UntypedFormGroup) {
        this.markControlAsToushed(control);
      }
    });
    // Object.values(form.controls).forEach((control: any) => {
    //   control.markAsTouched();
    //   if (control?.controls) {
    //     Object.values(form.controls).forEach((control: any) => {
    //       console.log(control);
    //       control.markAsTouched();
    //     });
    //   }
    // });
  }

  submitValidity(form: FormGroup): boolean {
    if (!form.valid) {
      this.markControlAsToushed(form);
      return false;
    }

    return true;
  }
}
