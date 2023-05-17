import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizserviceService } from './quizservice.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    

  ],
  providers: [QuizserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
