import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  quizzes = [
    {
      estimatedTime: '8 minutes',
      id: '1',
      title: 'Quiz 2, Chapter 1',
      date: '21/4/2020',
      deliveredNum: 2,
      newDeliveredNum: 1,
      questions: [
        {
          content: 'The bio methane is produced by the _______ of biomass.',
          rightAnswer: 0,
          answers: [
            'Aerobic oxidation',
            'Anaerobic oxidation',
            'Fermentation',
            'Rectification'
          ]
        },
        {
          content: 'Bio gas is compressed and used as _______',
          rightAnswer: 1,
          answers: [
            'Motor fuel',
            'Fuels in vehicles',
            'Dog feed',
            'Cow feed'
          ],
        }, {
          content: 'The _______ is used as the agricultural fertilizer.',
          rightAnswer: 2,
          answers: [
            'Bio ethanol',
            'Bio ethane',
            'Bio methanol',
            'Digestrate'
          ]
        }, {
          content: 'Bio diesel is produced by the _______ of the vegetable oil.',
          rightAnswer: 3,
          answers: [
            'Fermentation',
            'Distillation',
            'Transesterification',
            'Rectification'
          ]
        }, {
          content: 'The bio diesel is the long chain of carbon atoms contains _______ group at one end.',
          rightAnswer: 0,
          answers: [
            'Alcohol',
            'Aldehyde',
            'Ketone',
            'Ester'
          ]
        }
      ],
      delivered: [
        {
          id: '1',
          name: 'Ahmed Hassan',
          img: 'https://dmg5c1valy4me.cloudfront.net/wp-content/uploads/2018/11/07171648/ter-ovanesyan_dima_web.jpg',
          score: '4/5',
          answers: [0, 2, 2, 3, 0]
        }, {
          id: '2',
          name: 'Mohamed Ali',
          img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          score: '3/5',
          answers: [1, 0, 2, 3, 0]
        }
      ]
    },
    {
      estimatedTime: '10 minutes',
      id: '1',
      title: 'Quiz 1, Chapter 1',
      date: '22/4/2020',
      deliveredNum: 2,
      newDeliveredNum: 0,
      questions: [
        {
          content: 'The bio methane is produced by the _______ of biomass.',
          rightAnswer: 0,
          answers: [
            'Aerobic oxidation',
            'Anaerobic oxidation',
            'Fermentation',
            'Rectification'
          ]
        },
        {
          content: 'Bio gas is compressed and used as _______',
          rightAnswer: 1,
          answers: [
            'Motor fuel',
            'Fuels in vehicles',
            'Dog feed',
            'Cow feed'
          ],
        }, {
          content: 'The _______ is used as the agricultural fertilizer.',
          rightAnswer: 2,
          answers: [
            'Bio ethanol',
            'Bio ethane',
            'Bio methanol',
            'Digestrate'
          ]
        }, {
          content: 'Bio diesel is produced by the _______ of the vegetable oil.',
          rightAnswer: 3,
          answers: [
            'Fermentation',
            'Distillation',
            'Transesterification',
            'Rectification'
          ]
        }, {
          content: 'The bio diesel is the long chain of carbon atoms contains _______ group at one end.',
          rightAnswer: 0,
          answers: [
            'Alcohol',
            'Aldehyde',
            'Ketone',
            'Ester'
          ]
        }
      ],
      delivered: [
        {
          id: '1',
          name: 'Ahmed Hassan',
          img: 'https://dmg5c1valy4me.cloudfront.net/wp-content/uploads/2018/11/07171648/ter-ovanesyan_dima_web.jpg',
          score: '4/5',
          answers: [0, 1, 3, 3, 0]
        }, {
          id: '2',
          name: 'Mohamed Ali',
          img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          score: '3/5',
          answers: [1, 1, 2, 3, 1]
        }
      ]
    },
  ];
  constructor() { }

  addQuiz(quiz) {
    this.quizzes.unshift(quiz);
  }
}
