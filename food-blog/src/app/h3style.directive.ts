import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appH3style]'
})
export class H3styleDirective implements OnInit {
  @Input() header = ''
  constructor(private el: ElementRef) {
  }
  ngOnInit(): void {
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.fontSize = '50px';
    this.el.nativeElement.innerText = this.header;
  }
}
