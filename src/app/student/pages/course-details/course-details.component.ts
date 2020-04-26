import { Component, OnInit, HostListener } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  course;
  selectedTabIndex;
  largeScreen = window.innerWidth  >= 600;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.largeScreen = event.target.innerWidth >= 600;
  }
  constructor(private coursesService: CoursesService, private router: Router) {
    this.selectedTabIndex = coursesService.selectedIndex;
    coursesService.selectedIndex = null;
    this.course = coursesService.getCurrentCourse();
    if (!this.course) {
      this.router.navigateByUrl('courses');
    }
  }

  ngOnInit() {
  }

}
