import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(
    private postApi: PostServiceService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.titleService.setTitle('Danh sách posts');
    this.metaService.updateTag({
      name: 'description',
      content: 'Danh sách các bài post của người dùng đăng',
    });
  }

  allPosts: any;

  async ngOnInit() {
    this.allPosts = await this.postApi.getPosts();
  }
}
