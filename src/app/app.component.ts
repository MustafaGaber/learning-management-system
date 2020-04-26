import { Component, OnInit } from '@angular/core';
import { CoursesService } from './student/services/courses.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LMS';

  constructor(private coursesService: CoursesService, private router: Router,
    // tslint:disable-next-line:align
    private snackBar: MatSnackBar) { }
  ngOnInit() {
    if (!this.coursesService.messageShowed) {
      setTimeout(() => {
        this.openSnackBar('Science class is live now', 'Go to class');
        this.coursesService.messageShowed = true;
      }, 2000);
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    }).onAction().subscribe(() => {
      this.router.navigateByUrl('live');
    });
  }
}
