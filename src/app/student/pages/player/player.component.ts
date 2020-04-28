import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  commenting = false;
  comment;
  comments: any[] = [];
  selectedSectionId;
  selectedVideoId;
  selectedVideoName;
  course;
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

  constructor(private coursesService: CoursesService, private router: Router) {
    this.course = coursesService.getCurrentCourse();
    if (!this.course) {
      this.router.navigate(['student', 'courses']);
    }
    this.selectedVideoId = coursesService.currentVideo ? coursesService.currentVideo.id : null;
    this.selectedVideoName = coursesService.currentVideo ? coursesService.currentVideo.name : null;
    this.selectedSectionId = coursesService.currentSection ? coursesService.currentSection.id : null;
  }

  openVideo(section, video) {
    this.selectedVideoName = video.name;
    this.selectedVideoId = video.id;
    this.selectedSectionId = section.id;
    (document as any).getElementById('iframe').src = (document as any).getElementById('iframe').src;
  }
  ngOnInit() {
  }

  addComment() {
    this.commenting = !this.commenting;
  }

  sendComment() {
    const date = new Date();
    const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    const m = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
    const d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    if (this.comment && this.comment.trim()) {
      this.comments.unshift(
        {
          id: Math.random().toString(),
          date: `${d}/${m}/${y}`,
          content: this.comment.trim(),
          name: 'Ahmed Hassan',
          job: 'Student',
          img: 'https://dmg5c1valy4me.cloudfront.net/wp-content/uploads/2018/11/07171648/ter-ovanesyan_dima_web.jpg',
          comments: [],
        },
      );
      this.comment = '';
      this.commenting = false;
    }
  }
}
