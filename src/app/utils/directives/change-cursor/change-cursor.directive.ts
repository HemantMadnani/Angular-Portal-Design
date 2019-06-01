import { Directive, HostListener, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeCursor]'
})
export class ChangeCursorDirective  implements OnInit{

  constructor(private elementRef: ElementRef) { }
// tslint:disable-next-line: no-input-rename
@Input('appChangeCursor')appChangeCursor: string;
  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.cursor = this.appChangeCursor || 'default';
  }
  ngOnInit() {
    this.elementRef.nativeElement.style.cursor = 'default';
  }
}
