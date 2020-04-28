import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseContentsService {

  contents = [
    {
      id: '1',
      name: 'Introduction', totalLength: '5m',
      videos: [
        { id: '1', name: 'Intorduction', length: '5m' },
      ]
    },
    {
      id: '2',
      name: 'Chapter 1: Atoms and Molecules',
      totalLength: '65m',
      videos: [
        { id: '1', name: 'Intorduction', length: '10m' },
        { id: '2', name: 'Atomic Structure', length: '25m' },
        { id: '3', name: 'Atomic spectra', length: '30m' },
        { id: '4', name: 'Periodic table of atoms', length: '30m', current: true },
      ]
    },
    {
      id: '3',
      name: 'Chapter 2: Inorganic Chemistry',
      totalLength: '98m',
      videos: [
        { id: '1', name: 'Intorduction', length: '12m' },
        { id: '2', name: 'Atomic Reactions', length: '30m' },
        { id: '3', name: 'Types of chemical bonds', length: '22m' },
        { id: '4', name: 'Chemical calculations', length: '25m' },
      ]
    },
    {
      id: '4',
      name: 'Chapter 3: Organic Chemistry',
      totalLength: '100m',
      videos: [
        { id: '1', name: 'Intorduction', length: '14m' },
        { id: '2', name: 'The Octet Rule', length: '28m' },
        { id: '3', name: 'Writing Lewis Structures', length: '27m' },
        { id: '4', name: 'Hybirdization', length: '31m' },
      ]
    },
    {
      id: '5',
      name: 'Chapter 4: Forensic Chemistry',
      totalLength: '105m',
      videos: [
        { id: '1', name: 'Intorduction', length: '15m' },
        { id: '2', name: 'The history and principles of forensic science', length: '30m' },
        { id: '3', name: 'Types of forensic evidence', length: '32m' },
        { id: '4', name: 'Concepts of toxicology', length: '28m' },
      ]
    },
  ];
  constructor() { }

  addVideo(name, sectionName) {
    const section = this.contents.find(c => c.name === sectionName);
    section.videos.push({
      name,
      id: Math.random().toString(),
      length: (Math.floor(Math.random() * 59 + 10)) + 'm'
    });
  }

  deleteVideo(sectionName, videoName) {
    const section = this.contents.find(c => c.name === sectionName);
    section.videos = section.videos.filter(v => v.name !== videoName);
  }

  addSection(name) {
    this.contents.push({
      id: Math.random().toString(),
      name,
      totalLength: '0m',
      videos: []
    });
  }

  deleteSection(name) {
    this.contents = this.contents.filter(s => s.name !== name);
  }
}
