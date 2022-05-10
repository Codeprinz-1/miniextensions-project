import { usernameReducer } from '../../redux/reducers/username';
import { updateUsername } from '../../redux/actions/username';

test('should update username in app state', () => {
  const usernameMock: string = 'username';

  expect(usernameReducer(undefined, updateUsername(usernameMock))).toBe(
    usernameMock
  );
});
