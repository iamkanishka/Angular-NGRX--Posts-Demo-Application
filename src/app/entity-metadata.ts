import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';
import { Post } from './Models/posts.model';
 
export const entityMetadata: EntityMetadataMap = {
Post: {
  sortComparer: sortByName,
 // entityDispatcherOptions:{
    //we can use     optimisticUpdate: true  oonly if we want to update the post before updateing in the backend
    //Note : Dont use      optimisticUpdate: true , or any of teh optimistic features Dont Show until it has been updated in the backend
    //optimisticUpdate: true
     //optimisticDelete: false,
  //}
}
};


function sortByName(a: Post, b: Post): number {
  let comp = a.title!.localeCompare(b.title!);
  return comp;
}
 
// because the plural of "hero" is not "heros"
//const pluralNames = { Hero: 'Heroes' };
 
export const entityConfig : EntityDataModuleConfig = {
  entityMetadata,
  //pluralNames
};
