import { configureStore, createSelector } from '@reduxjs/toolkit';
import { ItemListInterface } from '../../assets';

interface CartState {
  items: ItemListInterface[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: cartReducer,
});


export const addItemToCart = (item: ItemListInterface) => {
  return { type: 'ADD_ITEM', payload: item };
};


type RootState = ReturnType<typeof store.getState>;
export const selectCartItems = createSelector(
  (state: RootState) => state.items,
  (items) => items
);