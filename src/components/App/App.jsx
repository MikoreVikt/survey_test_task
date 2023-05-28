import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/authRedux/operations';
import { selectIsRefreshing, selectIsLoading } from 'redux/authRedux/selectors';
import { selectIsLoadingSending } from 'redux/surveysRedux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Loader } from 'components/Loader/Loader';
import {
  RestrictedRoute,
  RestrictedRouteAfterFirstAnswer,
  RestrictedRouteAfterSecondAnswer,
} from 'components/RestrictedRoute';
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
const Result1 = lazy(() => import('../SurveysResults/FirstSurveysResults'));
const Result2 = lazy(() => import('../SurveysResults/SecondSurveysResults'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const isLoadingSending = useSelector(selectIsLoadingSending);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing || isLoading || isLoadingSending ? (
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
            path="/first_survey"
            element={
              <RestrictedRouteAfterFirstAnswer
                redirectTo="/account"
                component={<Survey1 />}
              />
            }
          />
          <Route
            path="/second_survey"
            element={
              <RestrictedRouteAfterSecondAnswer
                redirectTo="/account"
                component={<Survey2 />}
              />
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
          <Route
            path="/first_surveys_results"
            element={
              <PrivatedRoute redirectTo="/login" component={<Result1 />} />
            }
          />
          <Route
            path="/second_surveys_results"
            element={
              <PrivatedRoute redirectTo="/login" component={<Result2 />} />
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
