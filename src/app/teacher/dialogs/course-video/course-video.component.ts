import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-course-video',
  templateUrl: './course-video.component.html',
  styleUrls: ['./course-video.component.scss']
})
export class CourseVideoComponent implements OnInit {

  sections: any[] = [];
  videoName;
  section;
  constructor(public dialogRef: MatDialogRef<CourseVideoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.sections = data.sections;
    this.section = data.section;
  }

  submit() {
    if (this.videoName && this.section) {
      this.dialogRef.close({name: this.videoName, section: this.section});
    }
  }

  dismiss() {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
