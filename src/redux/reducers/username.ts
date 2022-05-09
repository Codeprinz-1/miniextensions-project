import { UPDATEUSERNAME } from '../types/username';

export const usernameReducer = (state = '', action: Action<string>) => {
  switch (action.type) {
    case UPDATEUSERNAME:
      return action.payload;
    default:
      return state;
  }
};
