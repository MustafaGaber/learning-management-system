import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

  title;
  content;
  constructor(public dialogRef: MatDialogRef<HomeworkComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit() {
  }

  submit() {
    if (this.title && this.content) {
      this.dialogRef.close({title: this.title, content: this.content});
    }
  }

  dismiss() {
    this.dialogRef.close();
  }

}
