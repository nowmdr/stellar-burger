import { configureStore, combineReducers } from '@reduxjs/toolkit';

import ingredientsSlice from './ingredients-slice';
import feedSlice from './feed-slice';
import userSlice from './user-slice';
import burgerConstructorSlice from './burger-constructor-slice';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

const rootReducer = combineReducers({
  ingredients: ingredientsSlice,
  feed: feedSlice,
  user: userSlice,
  burgerConstructor: burgerConstructorSlice
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
