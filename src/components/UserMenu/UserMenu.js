import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Wrapper, UserName, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName> 🙍‍♂️ {user.name}</UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        ⇨
      </Button>
    </Wrapper>
  );
};
