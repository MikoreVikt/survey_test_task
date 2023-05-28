import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authRedux/selectors';
import {
  selectFirstAnswerStatus,
  selectSecondAnswerStatus,
} from 'redux/surveysRedux/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictedRouteAfterFirstAnswer = ({
  component: Component,
  redirectTo = '/',
}) => {
  const firstAnswerStatus = useSelector(selectFirstAnswerStatus);

  return firstAnswerStatus ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictedRouteAfterSecondAnswer = ({
  component: Component,
  redirectTo = '/',
}) => {
  const secondAnswerStatus = useSelector(selectSecondAnswerStatus);

  return secondAnswerStatus ? <Navigate to={redirectTo} /> : Component;
};
