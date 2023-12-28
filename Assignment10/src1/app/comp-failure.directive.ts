import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true,
})
export class CompFailureDirective {
  constructor(private obj: ElementRef) {}
  @HostListener('mouseenter') onmouseenter() {
    this.obj.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') onmouseleave() {
    this.obj.nativeElement.style.color = 'black';
  }
}
