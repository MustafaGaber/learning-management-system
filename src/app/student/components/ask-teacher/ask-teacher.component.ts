import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-teacher',
  templateUrl: './ask-teacher.component.html',
  styleUrls: ['./ask-teacher.component.scss']
})
export class AskTeacherComponent implements OnInit {

  question;
  questions = [];
  constructor() { }

  ngOnInit() {
  }

  send() {
    if (this.question && this.question.trim()) {
      this.questions.push(this.question);
      this.question = '';
    }
  }
}
