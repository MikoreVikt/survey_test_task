import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/authRedux/operations';
import { selectIsRefreshing } from 'redux/authRedux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Loader } from 'components/Loader/Loader';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivatedRoute } from 'components/PrivateRoute';
import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const Register = lazy(() => import('../../pages/RegisterPage'));
const Login = lazy(() => import('../../pages/LoginPage'));
const Account = lazy(() =>
  import('../../pages/PersonalAccountPage/PersonalAccountPage')
);
const Survey1 = lazy(() => import('../Surveys/FirstSurvey'));
const Survey2 = lazy(() => import('../Surveys/SecondSurvey'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/account" component={<Home />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/account" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/account" component={<Login />} />
            }
          />
          <Route
            path="/account"
            element={
              <PrivatedRoute redirectTo="/login" component={<Account />} />
            }
          />
          <Route
            path="/first_survey"
            element={
              <PrivatedRoute redirectTo="/login" component={<Survey1 />} />
            }
          />
          <Route
            path="/second_survey"
            element={
              <PrivatedRoute redirectTo="/login" component={<Survey2 />} />
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};