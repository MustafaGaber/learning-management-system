import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MultipleSelectQuestionComponent } from '../../dialogs/multiple-select-question/multiple-select-question.component';
import { QuizzesService } from '../../services/quizzes/quizzes.service';

@Component({
  selector: 'app-course-quizzes',
  templateUrl: './course-quizzes.component.html',
  styleUrls: ['./course-quizzes.component.scss']
})
export class CourseQuizzesComponent implements OnInit {

  addingQuiz = false;
  deliveredOpened = false;
  title;
  time;
  questions = [];
  quizzes = [];
  currentQuiz;
  constructor(private quizzesService: QuizzesService, private diaolg: MatDialog) { }

  ngOnInit() {
    this.quizzes = this.quizzesService.quizzes;
  }

  addQuestion() {
    this.diaolg.open(MultipleSelectQuestionComponent, {
      width: '400px',
      data: {}
    }).afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.questions.push( {
          content: result.question,
          answers: result.answers.map(answer => answer.value)
        });
      }
    });
  }

  addQuiz() {
    this.addingQuiz = true;
  }
  save() {
    if (! this.title) {
      return;
    }
    const date = new Date();
    const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    const m = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
    const d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    this.quizzesService.addQuiz( {
      title: this.title,
      estimatedTime: this.time,
      id: Math.random().toString(),
      date: `${d}/${m}/${y}`,
      questions: this.questions,
    });
    this.quizzes = this.quizzesService.quizzes;
    this.title = '';
    this.time = '';
    this.questions = [];
    this.addingQuiz = false;
  }

  openDelivered(quiz) {
    this.currentQuiz = quiz;
    this.deliveredOpened = true;
  }

  back() {
    this.deliveredOpened = false;
    this.addingQuiz = false;
  }
}
