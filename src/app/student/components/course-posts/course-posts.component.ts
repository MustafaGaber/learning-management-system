import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-course-posts',
  templateUrl: './course-posts.component.html',
  styleUrls: ['./course-posts.component.scss']
})
export class CoursePostsComponent implements OnInit {

  post;
  posting = false;
  comments = {};
  posts = [];
  constructor(private postService: PostsService) {
    this.posts = postService.posts;
  }

  ngOnInit() {
  }

  comment(post) {
    post.commenting = !post.commenting;
  }

  addPost() {
    this.posting = !this.posting;
  }

  sendPost() {
    if (this.post && this.post.trim()) {
      this.postService.sendPost(this.post);
      this.posts = this.postService.posts;
      this.post = '';
      this.posting = false;
    }
  }

  like(post) {
    post.liked = !post.liked;
  }

  sendComment(post) {
    post.comments.push({
      name: 'Ahmed Hassan', content: this.comments[post.id],
      // tslint:disable-next-line:max-line-length
      img: 'https://dmg5c1valy4me.cloudfront.net/wp-content/uploads/2018/11/07171648/ter-ovanesyan_dima_web.jpg'
    });
    post.commenting = false;
    this.comments[post.id] = '';
  }
}
