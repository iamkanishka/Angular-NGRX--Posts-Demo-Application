import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostslistComponent } from './postslist/postslist.component';
import { PostResolver } from './service/post.resolver';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [

  {path:'',component:PostslistComponent, resolve:{posts:PostResolver}},
  {path:'add',component:AddPostComponent, },
  {path:'edit/:id',component:EditPostComponent, resolve:{posts:PostResolver}},
  {path:'view/:id',component:ViewPostComponent, resolve:{posts:PostResolver}},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
