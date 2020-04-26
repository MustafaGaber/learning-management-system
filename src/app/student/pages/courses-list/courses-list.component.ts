import { Component, OnInit, HostListener } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses = [
    {name: 'Science', id: '1', icon: 'science'},
    {name: 'Math', id: '2', icon: 'math'},
    {name: 'English', id: '3', icon: 'english'},
    {name: 'Arabic', id: '4', icon: 'arabic'},
    {name: 'Arts', id: '5', icon: 'arts'},
    {name: 'History', id: '6', icon: 'history'},
    {name: 'Geography', id: '7', icon: 'geography'},
    {name: 'Philosophy', id: '8', icon: 'philosophy'},
  ];
  largeScreen = window.innerWidth  >= 600;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.largeScreen = event.target.innerWidth >= 600;
  }
  constructor(private coursesService: CoursesService, private router: Router) { }

  ngOnInit() {
  }

  openCourse(course) {
    this.coursesService.setCurrentCourse(course);
    this.router.navigateByUrl('course-details');
  }
}
