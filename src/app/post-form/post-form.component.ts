import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() added = new EventEmitter<Post>();
  constructor() {}

  createPost(form: NgForm) {
    const newPost: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    this.added.emit(newPost);
  }

  ngOnInit(): void {}
}
