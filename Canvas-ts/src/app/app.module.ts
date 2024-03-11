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
import { VerticalProjectionComponent } from './vertical-projection/vertical-projection.component';
import { MomentumOneAxisComponent } from './momentum-one-axis/momentum-one-axis.component';
import { MomentumTwoAxesComponent } from './momentum-two-axes/momentum-two-axes.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    DrawImageComponent,
    StateCanvasComponent,
    AnimationsComponent,
    TransformationComponent,
    PhysicsAnimationComponent,
    VerticalProjectionComponent,
    MomentumOneAxisComponent,
    MomentumTwoAxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
