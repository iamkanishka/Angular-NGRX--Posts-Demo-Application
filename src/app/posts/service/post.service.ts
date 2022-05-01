import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Post } from 'src/app/Models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostService extends EntityCollectionServiceBase<Post> {

  constructor(serviceElemnetsFactory:EntityCollectionServiceElementsFactory) {
    super('Post',serviceElemnetsFactory)
   }
}
