import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-quizes',
  templateUrl: './course-quizes.component.html',
  styleUrls: ['./course-quizes.component.scss']
})
export class CourseQuizesComponent implements OnInit {
  quizes = [
    {
      solving: false,
      estimatedTime: '8 minutes',
      id: '1',
      title: 'Quiz 2, Chapter 1',
      date: '21/4/2020',
      questions: [
        {
          content: 'The bio methane is produced by the __________ of biomass.',
          answers: [
            'Aerobic oxidation',
            'Anaerobic oxidation',
            'Fermentation',
            'Rectification'
          ]
        } ,
        {
          content: 'Bio gas is compressed and used as ________',
          answers: [
            'Motor fuel',
            'Fuels in vehicles',
            'Dog feed',
            'Cow feed'
          ],
        }, {
          content: 'The _______ is used as the agricultural fertilizer.',
          answers: [
            'Bio ethanol',
            'Bio ethane',
            'Bio methanol',
            'Digestrate'
          ]
        }, {
          content: 'Bio diesel is produced by the __________ of the vegetable oil.',
          answers: [
            'Fermentation',
            'Distillation',
            'Transesterification',
            'Rectification'
          ]
        }, {
          content: 'The bio diesel is the long chain of carbon atoms contains _________ group at one end.',
          answers: [
            'Alcohol',
            'Aldehyde',
            'Ketone',
            'Ester'
          ]
        }
      ]
    },
    {
      solving: false,
      estimatedTime: '10 minutes',
      id: '1',
      title: 'Quiz 1, Chapter 1',
      date: '22/4/2020',
      questions: [
        {
          content: 'The bio methane is produced by the __________ of biomass.',
          answers: [
            'Aerobic oxidation',
            'Anaerobic oxidation',
            'Fermentation',
            'Rectification'
          ]
        } ,
        {
          content: 'Bio gas is compressed and used as ________',
          answers: [
            'Motor fuel',
            'Fuels in vehicles',
            'Dog feed',
            'Cow feed'
          ],
        }, {
          content: 'The _______ is used as the agricultural fertilizer.',
          answers: [
            'Bio ethanol',
            'Bio ethane',
            'Bio methanol',
            'Digestrate'
          ]
        }, {
          content: 'Bio diesel is produced by the __________ of the vegetable oil.',
          answers: [
            'Fermentation',
            'Distillation',
            'Transesterification',
            'Rectification'
          ]
        }, {
          content: 'The bio diesel is the long chain of carbon atoms contains _________ group at one end.',
          answers: [
            'Alcohol',
            'Aldehyde',
            'Ketone',
            'Ester'
          ]
        }
      ]
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  solveQuiz(quiz) {
    quiz.solving = true;
  }

  saveQuiz(quiz) {
    quiz.solving = false;
  }
}
