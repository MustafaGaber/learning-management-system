import { Component, OnInit } from '@angular/core';
import { CoursesService } from './student/services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LMS';

  constructor(private coursesService: CoursesService, private router: Router) { }
  ngOnInit() {

  }


}
