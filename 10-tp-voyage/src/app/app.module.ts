import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeaService } from './services/idea.service';
import { VoyageComponent } from './voyage/voyage.component';

@NgModule({
  declarations: [
    AppComponent,
    VoyageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    IdeaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
