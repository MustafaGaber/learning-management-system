import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-multiple-select-question',
  templateUrl: './multiple-select-question.component.html',
  styleUrls: ['./multiple-select-question.component.scss']
})
export class MultipleSelectQuestionComponent implements OnInit {

  answers = [{ value: ''}, { value: '' },
  { value: '' }, { value: '' }];
  rightChoice: number;
  question;
  constructor(public dialogRef: MatDialogRef<MultipleSelectQuestionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  submit() {
    if (true) {
      this.dialogRef.close({
        question: this.question,
        answers: this.answers,
        rightChoice: this.rightChoice
      });
    }
  }

  dismiss() {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
}
