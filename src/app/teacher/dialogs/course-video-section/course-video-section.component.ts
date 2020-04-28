import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-course-video-section',
  templateUrl: './course-video-section.component.html',
  styleUrls: ['./course-video-section.component.scss']
})
export class CourseVideoSectionComponent implements OnInit {

  name;
  constructor(public dialogRef: MatDialogRef<CourseVideoSectionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit() {
  }

  submit() {
    if (this.name) {
      this.dialogRef.close({name: this.name});
    }
  }

  dismiss() {
    this.dialogRef.close();
  }


}
