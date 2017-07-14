import { RiddleSearchComponent } from './components/riddle-search/riddle-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// 3rd Parties
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ComponentsModule } from './components';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// Components
import { PanelModule, InputTextModule, ButtonModule, TabViewModule, AutoCompleteModule } from 'primeng/primeng';
import { AppComponent } from './containers/app/app.component';
import { RiddlePageComponent } from './containers/riddle-page/riddle-page.component';
import { RiddlesMainPageComponent} from './containers/riddles-main-page/riddles-main-page.component';
import { HeaderComponent } from './containers/header/header.component';
import { SidenavComponent } from './containers/sidenav/sidenav.component';

// Services
import { GetRiddlesService } from './services/get-riddles.service';

// Effects
import { RiddlesEffects } from './effects/riddles';

// Misc
import { reducer } from './reducers';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'riddles',
    pathMatch: 'full'
  },
  {
    path: 'riddles',
    component: RiddlesMainPageComponent
  },
  {
    path: 'riddles/:id',
    component: RiddlePageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RiddlesMainPageComponent,
    RiddlePageComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    TabViewModule,
    PanelModule,
    ComponentsModule,
    EffectsModule.run(RiddlesEffects),
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [GetRiddlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
