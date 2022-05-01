import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostslistComponent } from './posts/postslist/postslist.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { ViewPostComponent } from './posts/view-post/view-post.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { HttpClientModule } from '@angular/common/http';
import { PostDataServiceService } from './posts/service/post-data-service.service';
import { ReactiveFormsModule } from '@angular/forms';


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
    AppRoutingModule,
    StoreModule.forRoot({}),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      // maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(entityDataService: EntityDataService,postDataService:PostDataServiceService){
    entityDataService.registerService('Post',postDataService)
  }
 }
