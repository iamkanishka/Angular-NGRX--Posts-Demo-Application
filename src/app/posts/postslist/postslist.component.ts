import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';


@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.scss']
})
export class PostslistComponent implements OnInit {

  constructor(private postService :PostService) {
  console.log( this.postService.getAll());
   
   }

  ngOnInit(): void {
  }

}
