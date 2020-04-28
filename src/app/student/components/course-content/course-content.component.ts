import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  contents = [
    {
      id: '1',
      name: 'Introduction', totalLength: '5m',
      allSeen: true,
      videos: [
        { id: '1', name: 'Intorduction', length: '5m', seen: true },
      ]
    },
    {
      id: '2',
      name: 'Chapter 1: Atoms and Molecules',
      totalLength: '65m',
      allSeen: true,
      expanded: true,
      videos: [
        { id: '1', name: 'Intorduction', length: '10m', seen: true },
        { id: '2', name: 'Atomic Structure', length: '25m', seen: true },
        { id: '3', name: 'Atomic spectra', length: '30m', seen: true },
        { id: '4', name: 'Periodic table of atoms', length: '30m', seen: true, current: true },
      ]
    },
    {
      id: '3',
      name: 'Chapter 2: Inorganic Chemistry',
      totalLength: '98m',
      allSeen: true,
      videos: [
        { id: '1', name: 'Intorduction', length: '12m', seen: true },
        { id: '2', name: 'Atomic Reactions', length: '30m', seen: true },
        { id: '3', name: 'Types of chemical bonds', length: '22m', seen: true },
        { id: '4', name: 'Chemical calculations', length: '25m', seen: true },
      ]
    },
    {
      id: '4',
      name: 'Chapter 3: Organic Chemistry',
      totalLength: '100m',
      allSeen: true,
      videos: [
        { id: '1', name: 'Intorduction', length: '14m', seen: true },
        { id: '2', name: 'The Octet Rule', length: '28m', seen: true },
        { id: '3', name: 'Writing Lewis Structures', length: '27m', seen: true },
        { id: '4', name: 'Hybirdization', length: '31m', seen: true },
      ]
    },
    {
      id: '5',
      name: 'Chapter 4: Forensic Chemistry',
      totalLength: '105m',
      allSeen: false,
      videos: [
        { id: '1', name: 'Intorduction', length: '15m', seen: true },
        { id: '2', name: 'The history and principles of forensic science', length: '30m', seen: false },
        { id: '3', name: 'Types of forensic evidence', length: '32m', seen: false },
        { id: '4', name: 'Concepts of toxicology', length: '28m', seen: false },
      ]
    },
  ];

  constructor(private router: Router, private coursesService: CoursesService) { }

  ngOnInit() {
  }

  openVideo(section, video) {
    this.coursesService.currentSection = section;
    this.coursesService.currentVideo = video;
    this.router.navigate(['student', 'player']);
  }
}
