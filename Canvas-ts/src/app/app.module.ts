import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleComponent } from './circle/circle.component';
import { DrawImageComponent } from './draw-image/draw-image.component';
import { StateCanvasComponent } from './state-canvas/state-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    DrawImageComponent,
    StateCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
