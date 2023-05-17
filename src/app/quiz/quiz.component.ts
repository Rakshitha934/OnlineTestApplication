import { Component, OnInit } from '@angular/core';
import { QuizserviceService } from '../quizservice.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizzes: any[] = [];
  currentQuiz=0;//this will return the first question
answerSelected=false;
correctAnswers = 0 ;
incorrectAnswers = 0;
selectedOption: any = null;

randomize:number | undefined;

result=false;

  constructor(private quizservice: QuizserviceService) {}

  ngOnInit(): void {
    this.quizzes = this.quizservice.getQuizzes();
  }

  onAnswer(option: boolean) {
    if (option) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
    }
    
    this.answerSelected = true; // Set answerSelected to true when an option is selected
  }

  nextQuestion() {
    this.currentQuiz++;
    this.answerSelected = false;
    this.selectedOption = null;
  }

  showResult()
  {
    this.result=true;
  }
}