import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Update } from '@ngrx/entity';
import { map, Observable, of } from 'rxjs';
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



   
  override add(post: Post): Observable<Post> {
    return this.http.post<{ name: string }>(
      'https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json',
      post, 
    ).pipe(map((data)=>{
      return {...post,id:data.name}
    }));
  }


  override update(post: Update<Post>): Observable<Post> {
    console.log(post);


    return this.http.put<Post>(
      `https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post/${post.id}.json`,
   { ...post.changes}
    );
  
  }

  override delete(id: string):Observable<string> {

    return this.http.delete(`https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json?id=${id}`).pipe(map((data)=>{
      return id
    }))
  }

}
