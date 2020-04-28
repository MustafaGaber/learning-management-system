import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts = [
    {
      id: '1',
      content: `Can anyone help me to understand atomic structre ?`,
      date: '22/4/2020',
      name: 'Mohamed Ali',
      job: 'Student',
      img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      comments: [],
    },
    {
      id: '2',
      date: '21/4/2020',
      content: `Hi everyone, We wish you a good term`,
      name: 'Ahmed AbdelRahman',
      job: 'Chemistry Teacher',
      img: 'https://puzl-production.s3.amazonaws.com/files/uploads/files/001/684/988/original/john_martin.jpg?1538144071',
      comments: [],
    },
  ];

  sendPost(post) {
    const date = new Date();
    const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    const m = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
    const d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    this.posts.unshift(
      {
        id: Math.random().toString(),
        date: `${d}/${m}/${y}`,
        content: post.trim(),
        name: 'Ahmed AbdelRahman',
        job: 'Science Teacher',
        img: 'https://puzl-production.s3.amazonaws.com/files/uploads/files/001/684/988/original/john_martin.jpg?1538144071',
        comments: [],
      },
    );
  }
  constructor() { }
}
