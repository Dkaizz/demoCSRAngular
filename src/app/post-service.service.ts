import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseApi = 'https://dummyjson.com/';
@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  constructor(public http: HttpClient) {}

  getPosts() {
    return this.http.get(baseApi + 'posts?limit=150').toPromise();
  }
  getPost(id: any) {
    return this.http.get(baseApi + 'posts/' + id).toPromise();
  }
}
