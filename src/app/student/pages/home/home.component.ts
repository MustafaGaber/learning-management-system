import { Component, OnInit, HostListener } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  largeScreen = window.innerWidth >= 600;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.largeScreen = event.target.innerWidth >= 600;
  }
  constructor(private coursesService: CoursesService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    if (!this.coursesService.messageShowed) {
      setTimeout(() => {
        this.openSnackBar('Science class is live now', 'Go to class');
        this.coursesService.messageShowed = true;
      }, 2000);
    }
  }

  openAssignment(courseName) {
    if (courseName === 'Science') {
      this.coursesService.setCurrentCourse({ name: 'Science', id: '1' });
    } else {
      this.coursesService.setCurrentCourse({ name: 'English', id: '3' });
    }
    this.coursesService.selectedIndex = 2;
    this.router.navigate(['student', 'course-details']);
  }

  openQuiz() {
    this.coursesService.setCurrentCourse({ name: 'Science', id: '1' });
    this.coursesService.selectedIndex = 3;
    this.router.navigate(['student', 'course-details']);
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    }).onAction().subscribe(() => {
      this.router.navigate(['student', 'live']);
    });
  }
}
