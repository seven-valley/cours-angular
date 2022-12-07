import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestComponent } from './guest/guest.component';
import { PersonneService } from './services/personne.service';

@NgModule({
  declarations: [
    AppComponent,
    GuestComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PersonneService // pour injection
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
