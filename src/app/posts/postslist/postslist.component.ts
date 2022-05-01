import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/Models/posts.model';
import { PostService } from '../service/post.service';


@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.scss']
})
export class PostslistComponent implements OnInit {
posts$:Observable<Post[]>;
  constructor(private postService :PostService) {
    this.posts$ = this.postService.entities$
   
   }

  ngOnInit(): void {
  }

  ondeletePost(event :Event,id:string){
    if(confirm("Sure you want you Delete Post")){
   this.postService.delete(id)
    }
  }

}
