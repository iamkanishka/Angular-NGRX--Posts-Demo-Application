import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module'
import {  EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { PostDataServiceService } from './service/post-data-service.service';
import { entityMetadata } from '../entity-metadata';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostslistComponent } from './postslist/postslist.component';

import { ViewPostComponent } from './view-post/view-post.component';




@NgModule({
  declarations: [
    AddPostComponent,
    PostslistComponent,
    EditPostComponent,
    ViewPostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule


  ],
  providers:[PostDataServiceService]
})
export class PostModule {
  constructor(entityDataService: EntityDataService, postDataService: PostDataServiceService,   eds: EntityDefinitionService,) {
    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('Post', postDataService);
  }
}
