import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScreenComponent } from './screen/screen.component';
import { NgSwitcheryModule } from 'angular-switchery-ios';

@NgModule({
  declarations: [AppComponent, ScreenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgSwitcheryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
