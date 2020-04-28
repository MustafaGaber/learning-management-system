import { Component, OnInit } from '@angular/core';
import { CourseContentsService } from '../../services/course-contents/course-contents.service';
import { MatDialog } from '@angular/material/dialog';
import { CourseVideoComponent } from '../../dialogs/course-video/course-video.component';
import { CourseVideoSectionComponent } from '../../dialogs/course-video-section/course-video-section.component';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  contents: any[] = [];
  constructor(private contentsService: CourseContentsService, public dialog: MatDialog,
              private coursesService: CoursesService, public router: Router) {
    this.contents = contentsService.contents;
  }

  ngOnInit() {
  }

  openVideo(section, video) {
    this.coursesService.currentSection = section;
    this.coursesService.currentVideo = video;
    this.router.navigate(['teacher', 'player']);
  }

  addVideo(event, sectionName) {
    event.stopPropagation();
    this.dialog.open(CourseVideoComponent, {
      data: { sections: this.contents.map(c => c.name), section: sectionName }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.contentsService.addVideo(result.name, result.section);
        this.contents = this.contentsService.contents;
      }
    });
  }

  deleteVideo(event, sectionName, videoName) {
    event.stopPropagation();
    this.contentsService.deleteVideo(sectionName, videoName);
    this.contents = this.contentsService.contents;
  }

  addSection() {
    this.dialog.open(CourseVideoSectionComponent, { data: {} }).afterClosed().subscribe(result => {
      if (result) {
        this.contentsService.addSection(result.name);
        this.contents = this.contentsService.contents;
      }
    });
  }

  deleteSection(event, sectionName) {
    event.stopPropagation();
    this.contentsService.deleteSection(sectionName);
    this.contents = this.contentsService.contents;
  }
}
