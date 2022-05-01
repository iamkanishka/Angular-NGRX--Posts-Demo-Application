import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { map, Observable } from 'rxjs';
import { Post } from 'src/app/Models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostDataServiceService extends DefaultDataService<Post> {

  constructor(http:HttpClient,httpUrlGenerator:HttpUrlGenerator) {
    super('Post',http,httpUrlGenerator)
   }

   override getAll(): Observable<Post[]> {
    return this.http
    .get<Post[]>(
      'https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json'
    )
    .pipe(
      map((response) => {
        let posts = [];
        for (let key in response) {
          posts.push({ ...response[key], id: key });
        }
        return posts;
      })
    );
   }
}
