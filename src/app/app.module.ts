import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
const routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:postId', component: PostComponent },
];

@NgModule({
  declarations: [AppComponent, PostsComponent, PostComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
