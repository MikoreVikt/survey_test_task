import { PersonalAccount } from 'components/PersonalAccount/PersonalAccount';
import {
  PersonalAccountWrapper,
  PersonalAccountTitle,
} from './PersonalAccountPage.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMyAnswers } from 'redux/surveysRedux/operations';

const PersonalAccountPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyAnswers());
  }, [dispatch]);

  return (
    <PersonalAccountWrapper>
      <PersonalAccountTitle>Personal account</PersonalAccountTitle>
      <PersonalAccount />
    </PersonalAccountWrapper>
  );
};

export default PersonalAccountPage;
