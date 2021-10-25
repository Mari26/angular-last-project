import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgImageSliderModule } from 'ng-image-slider';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    SharedModule,
    HomeModule,
    Ng2SearchPipeModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
