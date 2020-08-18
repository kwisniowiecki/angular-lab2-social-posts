import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'The first day...',
      thought: '...is good',
    },
    {
      title: 'The second day...',
      thought: '...is good',
    },
    {
      title: 'The third day...',
      thought: '...is good',
    },
  ];

  constructor() {}

  onDelete(i: number) {
    this.posts.splice(i, 1);
  }

  onAdd(post: Post) {
    this.posts.push(post);
  }

  ngOnInit(): void {}
}
