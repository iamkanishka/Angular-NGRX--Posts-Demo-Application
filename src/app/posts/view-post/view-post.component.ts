import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/Models/posts.model';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

post!:Post | undefined
 
  constructor( private postService:PostService , private router: Router, private activatedRoute:ActivatedRoute){ 
  const id = this.activatedRoute.snapshot.params['id']


    this.postService.entities$.subscribe((posts)=>{
      if(posts.length){
     this.post = posts.find((post)=>post.id=== id)
      }
    })
  }

  ngOnInit(): void {
  }

}
