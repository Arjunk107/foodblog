import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAuthorheading]'
})
export class AuthorheadingDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.innerText += 'I am ';
    this.el.nativeElement.style.textTransform = 'uppercase'
  }

}
