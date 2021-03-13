import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationCompComponent } from './registration-comp/registration-comp.component';
import { SearchDeleteCompComponent } from './search-delete-comp/search-delete-comp.component';
import { UserRegistrationService } from './user-registration.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationCompComponent,
    SearchDeleteCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ UserRegistrationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
