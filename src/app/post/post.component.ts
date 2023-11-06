import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../post-service.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  post: any;
  postId: any;

  constructor(
    private route: ActivatedRoute,
    private postApi: PostServiceService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.route.params.subscribe(async (params) => {
      this.postId = params['postId'];
      this.post = await this.postApi.getPost(this.postId);
      this.titleService.setTitle(this.post.title);
      this.metaService.updateTag({
        name: 'description',
        content: this.post.body,
      });
    });
  }
  ngOnInit() {}
}
