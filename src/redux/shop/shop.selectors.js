import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';



const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => 
  collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = memoize(collectionUrlParam =>
  createSelector([selectCollections], collections => {
    return collections ? collections[collectionUrlParam] : null
  }));


  
  /*export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );
  
  export const selectCollection = memoize(collectionUrlParam =>
    createSelector([selectCollections], collections => {
      return collections[collectionUrlParam]
    }));*/