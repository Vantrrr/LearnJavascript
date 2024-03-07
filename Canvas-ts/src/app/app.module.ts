import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleComponent } from './circle/circle.component';
import { DrawImageComponent } from './draw-image/draw-image.component';
import { StateCanvasComponent } from './state-canvas/state-canvas.component';
import { AnimationsComponent } from './animations/animations.component';
import { TransformationComponent } from './transformation/transformation.component';
import { PhysicsAnimationComponent } from './physics-animation/physics-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    DrawImageComponent,
    StateCanvasComponent,
    AnimationsComponent,
    TransformationComponent,
    PhysicsAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
