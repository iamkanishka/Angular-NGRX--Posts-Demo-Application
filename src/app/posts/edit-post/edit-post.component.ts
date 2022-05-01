import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/Models/posts.model';
import { PostService } from '../service/post.service';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  postForm:FormGroup
  id!:string

 
  constructor( private postService:PostService , private router: Router, private activatedRoute:ActivatedRoute){ 
    this.id = this.activatedRoute.snapshot.params['id']
  
    this.postForm = new FormGroup({
      title: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      description: new FormControl(null,[Validators.required, Validators.minLength(5)])

    })

    this.postService.entities$.subscribe((posts)=>{
      if(posts.length){
      const post = posts.find((post)=>post.id===this.id)
      this.postForm.patchValue({title:post?.title,description:post?.description})
      }
    })
  }

  ngOnInit(): void {
  }


 onUpdatePost() {
  //   console.log(this.postForm.value);
    const post: Post = {
      id: this.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.postService.update(post).subscribe((data)=>{
      this.router.navigate(['/posts'])
    })

 }

}
