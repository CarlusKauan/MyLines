import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { BlueLinesComponent } from './lines/blue-lines/blue-lines.component';
import { GreenLinesComponent } from './lines/green-lines/green-lines.component';
import { RedLinesComponent } from './lines/red-lines/red-lines.component';
import { YellowLinesComponent } from './lines/yellow-lines/yellow-lines.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlueLinesComponent,
    GreenLinesComponent,
    RedLinesComponent,
    YellowLinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
