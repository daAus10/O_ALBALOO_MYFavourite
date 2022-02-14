import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() colour?: string;

  constructor(private elm: ElementRef) {
  }

  ngOnInit(): void {
  }

  @HostListener("click") onClick(btn: any) {
    this.higlightMe(this.colour);
  }

  private higlightMe(colourValue?: string) {
    this.elm.nativeElement.style.backgroundColor = colourValue ?? "green";
  }
}
