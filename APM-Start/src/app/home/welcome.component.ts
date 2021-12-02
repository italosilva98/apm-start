import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  @ViewChild('para') par: ElementRef;

  public pageTitle = 'Welcome';

  ngAfterViewInit() {
    const parStream = fromEvent(this.par.nativeElement,'click').subscribe(
      console.log
    );
  }
}
