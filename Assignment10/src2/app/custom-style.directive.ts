import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true,
})
export class CustomStyleDirective implements OnInit {
  constructor(private obj: ElementRef) {}

  ngOnInit() {
    this.obj.nativeElement.style.background = 'yellow';
  }
}
