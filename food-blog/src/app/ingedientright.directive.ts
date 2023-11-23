import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appIngedientright]'
})
export class IngedientrightDirective implements OnInit {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.border = '5px solid black';
    this.el.nativeElement.style.fontSize = '20px';
  }
  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.border = '2px solid black';
    this.el.nativeElement.style.fontSize = '15px';
  }
  ngOnInit(): void {
    this.el.nativeElement.style.textAlign = 'right';
    this.el.nativeElement.style.fontSize = '15px';
    this.el.nativeElement.style.border = '2px solid black';
    this.el.nativeElement.style.backgroundColor = '#f2f2f2';
  }
}
