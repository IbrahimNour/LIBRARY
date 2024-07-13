import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaxLengthDirective]',
})
export class MaxLengthDirectiveDirective {
  @Input() appMaxLengthDirective!: number;

  constructor() {}

  @HostListener('input', ['$event.target'])
  onInput(target: HTMLInputElement, event: Event) {
    if (target.value.length > this.appMaxLengthDirective) {
      target.value = target.value.slice(0, this.appMaxLengthDirective);
    }
  }
}
