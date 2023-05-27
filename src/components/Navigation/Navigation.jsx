import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authRedux/selectors';
import { StyledLink } from 'components/AuthNav/AuthNav.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      {isLoggedIn ? (
        <>
          <StyledLink to="/account">Account</StyledLink>
          <UserMenu />
        </>
      ) : (
        <>
          <StyledLink to="/">Home</StyledLink>
          <AuthNav />
        </>
      )}
    </Nav>
  );
};
