import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/Models/posts.model';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postForm:FormGroup

 
  constructor( private postService:PostService , private router: Router){ 
    this.postForm = new FormGroup({
      title: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      description: new FormControl(null,[Validators.required, Validators.minLength(5)])

    })
  }
  ngOnInit(): void {
  }


  onAddPost(){
    console.log(this.postForm.value);
    const post:Post ={
      title : this.postForm.value.title,
      description : this.postForm.value.description
    }
    this.postService.add(post).subscribe((data)=>{
      this.router.navigate(['/posts'])
    })

    
  
  }
}
