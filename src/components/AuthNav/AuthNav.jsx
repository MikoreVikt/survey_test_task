import { Ul, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Ul>
      <li>
        <StyledLink to="/register">Sign Up</StyledLink>
      </li>
      <li>
        <StyledLink to="/login">Log In</StyledLink>
      </li>
    </Ul>
  );
};
