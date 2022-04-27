import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { PostslistComponent } from './posts/postslist/postslist.component';
import { ViewPostComponent } from './posts/view-post/view-post.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'posts',component:PostslistComponent},
  {path:'posts/add',component:AddPostComponent},
  {path:'posts/edit/:id',component:EditPostComponent},
  {path:'posts/view/:id',component:ViewPostComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
