import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { HeadersComponent } from './components/headers/headers.component';
import { HttpClientModule } from '@angular/common/http';
import { OptionValidateDirective } from './option-validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionsComponent,
    HeadersComponent,
    OptionValidateDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
