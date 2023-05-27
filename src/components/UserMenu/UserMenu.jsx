import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authRedux/operations';
import { selectUser } from 'redux/authRedux/selectors';
import { Wrapper, UserSpan, UserName, UserButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <UserName>
        <UserSpan>Welcom, </UserSpan>
        {user.username}
      </UserName>
      <UserButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserButton>
    </Wrapper>
  );
};
