import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';
 
const entityMetadata: EntityMetadataMap = {
Post: {}
};
 
// because the plural of "hero" is not "heros"
//const pluralNames = { Hero: 'Heroes' };
 
export const entityConfig : EntityDataModuleConfig = {
  entityMetadata,
  //pluralNames
};