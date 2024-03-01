import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @ViewChild('canvas', {static: true}) myCanvas!: ElementRef;

  ngOnInit(): void {
  }
}
