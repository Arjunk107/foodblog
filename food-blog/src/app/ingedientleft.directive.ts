import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appIngedientleft]'
})
export class IngedientleftDirective implements OnInit {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.border = '5px solid #877575';
    this.el.nativeElement.style.fontSize = '20px';
  }
  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.border = '2px solid #877575';
    this.el.nativeElement.style.fontSize = '15px';
  }
  ngOnInit(): void {
    this.el.nativeElement.style.textAlign = 'left';
    this.el.nativeElement.style.border = '2px solid #877575';
    this.el.nativeElement.style.backgroundColor = 'rgb(165, 165, 165)';
    this.el.nativeElement.style.fontSize = '15px';

  }
}
