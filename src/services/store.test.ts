import { rootReducer } from './store';
import ingredientsSlice from './slices/ingredientsSlice/ingredientsSlice';
import feedSlice from './slices/feedSlice';
import userSlice from './slices/userSlice';
import burgerConstructorSlice from './slices/burgerConstructorSlice/burgerConstructorSlice';

describe('rootReducer', () => {
  it('store initialize with the correct slices', () => {
    const state = rootReducer(undefined, { type: '@@INIT' });
    expect(state).toHaveProperty(ingredientsSlice.name);
    expect(state).toHaveProperty(feedSlice.name);
    expect(state).toHaveProperty(userSlice.name);
    expect(state).toHaveProperty(burgerConstructorSlice.name);
  });
});
