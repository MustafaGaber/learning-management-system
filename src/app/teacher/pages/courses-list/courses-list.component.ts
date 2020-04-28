import { Component, OnInit, HostListener } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: any[] = [];
  largeScreen = window.innerWidth >= 600;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.largeScreen = event.target.innerWidth >= 600;
  }
  constructor(private coursesService: CoursesService, public router: Router) {
    this.courses = coursesService.courses;
  }

  ngOnInit() {
  }

  openCourse(course) {
    this.coursesService.setCurrentCourse(course);
    this.router.navigate(['teacher', 'course-details']);
  }
}
