import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private postApi: PostServiceService) {}

  allPosts: any;

  async ngOnInit() {
    this.allPosts = await this.postApi.getPosts();
  }
}
