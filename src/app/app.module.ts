import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostslistComponent } from './posts/postslist/postslist.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { ViewPostComponent } from './posts/view-post/view-post.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    PostslistComponent,
    EditPostComponent,
    ViewPostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
