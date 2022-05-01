import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { first, map, mergeMap, Observable, of, tap } from 'rxjs';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<boolean> {
  constructor(private postService:PostService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
 //One Way of Writing Post Resolver

  // return  this.postService.loaded$.pipe(
  //   mergeMap((loaded)=>{
  //     if(loaded){
  //    return of(true)
  //     }
  //     return this.postService.getAll().pipe(map((posts)=>{
  //       return !!posts
  //     }))
  //   }),first()
  // )

 //Another Way of Writing Post Resolver
  
    return  this.postService.loaded$.pipe(
   tap((loaded)=>{
     if(!loaded){
       this.postService.getAll()
     }
   }),first()
  )


  }
}
