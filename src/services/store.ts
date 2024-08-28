import { configureStore, combineReducers } from '@reduxjs/toolkit';

import ingredientsSlice from './ingredientsSlice';
import feedSlice from './feed-slice';
import userSlice from './user-slice';
import burgerConstructorSlice from './burgerConstructorSlice';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

const rootReducer = combineReducers({
  [ingredientsSlice.name]: ingredientsSlice.reducer,
  feed: feedSlice,
  user: userSlice,
  [burgerConstructorSlice.name]: burgerConstructorSlice.reducer
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
