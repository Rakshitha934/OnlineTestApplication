import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {

  quizzes = [
    {
      question: '1.Which of the following statement is correct for AngularJS?',
      answer: [
        { option: 'AngularJS is an HTML framework', correct: false },
        { option: 'AngularJS is a Java framework', correct: false },
        { option: 'AngularJS is a JavaScript framework', correct: true },
        { option: 'AngularJS is a SQL framework', correct: false }
      ]
    },
    {
      question: '2.On which of the Architectural pattern AngularJS is based?',
      answer:
        [
          { option: 'Observer Pattern', correct: false },
          { option: 'Decorator Pattern', correct: false },
          { option: 'MVC Architecture  Pattern', correct: false },
          { option: 'MVVM Architecture Pattern', correct: false }
        ]
    },
    {
      question: '3.AngularJS is perfect for?',
      answer:
        [
          { option: 'SPAs', correct: true },
          { option: 'MPAs', correct: false },
          { option: 'DPAs', correct: false },
          { option: 'CPAs', correct: false }
        ]
    },
    {
      question: '4.Which of the following is the correct syntax for writing AngularJS expressions?',
      answer:
        [
          { option: '(expression) ', correct: false },
          { option: '{{expression}} ', correct: true },
          { option: '{{{expression}}} ', correct: false },
          { option: '[expression] ', correct: false }
        ]
    },
    {
      question: '5.Do AngularJS provide reusable components?',
      answer: [
        { option: 'Yes ', correct: true },
        { option: 'No ', correct: false }
      ]
    },
    {
      question : '6.Which of the following directive is used to bind the application data to the HTML view in AngularJS?',
      answer:[
        {option: 'ng-app directive ' , correct : false},
        {option: 'ng-model directive ' , correct : false},
        {option: 'ng-bind directive ' , correct : true},
        {option: 'ng-init directive ' , correct :false }
      
      ]
      },
      {
      question : '7.Which of the following statement is true about the lowercase filter?',
      answer:[
        {option: 'The lowercase filter converts a text to lower case text. ' , correct : true},
        {option: 'The lowercase filter is a function that takes text as input. ' , correct : false},
        {option: 'Both of the above. ' , correct : false},
        {option: 'None of the above. ' , correct :false }
      
      ]
      },
      {
      question : '8.Which of the following is an advantage of AngularJS?',
      answer:[
        {option: 'AngularJS code is unit testable. ' , correct : false},
        {option: 'AngularJS provides reusable components. ' , correct : false},
        {option: 'AngularJS uses dependency injection and makes use of separation of concerns. ' , correct : false},
        {option: 'All of the above. ' , correct :true }
      
      ]
      },
      {
      question : '9.Which of the following is used to share data between controller and view in AngularJS?',
      answer:[
        {option: 'using Model ' , correct : false},
        {option: 'using services ' , correct : true},
        {option: 'using factory ' , correct : false},
        {option: 'using $scope ' , correct :false }
      
      ]
      },
      {
        question : '10.Which directive initializes an AngularJS application?',
        answer:[
          {option: 'ng-app ' , correct : true},
          {option: 'ng-init ' , correct : false},
          {option: 'ng-model ' , correct : false},
          {option: 'ng-application ' , correct :false }
        
        ]
        },
      ]
  constructor() { }

  getQuizzes()
  {
    return this.quizzes;
  }
}
