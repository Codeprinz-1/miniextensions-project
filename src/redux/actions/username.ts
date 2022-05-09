import { UPDATEUSERNAME } from '../types/username';

export const updateUsername = (username: string) => ({
  type: UPDATEUSERNAME,
  payload: username,
});
