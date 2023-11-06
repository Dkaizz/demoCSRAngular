import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../post-service.service';

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
    private postApi: PostServiceService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = params['postId'];
      this.post = this.postApi.getPost(this.postId);
    });
  }
}
