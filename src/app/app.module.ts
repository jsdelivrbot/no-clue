import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RiddleThumbnailComponent } from './riddle-thumbnail/riddle-thumbnail.component';
import { RiddlesMosaicComponent } from './riddles-mosaic/riddles-mosaic.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GetRiddlesService } from './services/get-riddles.service';
import { RiddleFullComponent } from './riddle-full/riddle-full.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'riddles',
    pathMatch: 'full'
  },
  {
    path: 'riddles',
    component: RiddlesMosaicComponent
  },
  {
    path: 'riddles/:id',
    component: RiddleFullComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RiddleThumbnailComponent,
    RiddlesMosaicComponent,
    RiddleFullComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [GetRiddlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
