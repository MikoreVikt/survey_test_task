import { PersonalAccount } from 'components/PersonalAccount/PersonalAccount';
import {
  PersonalAccountWrapper,
  PersonalAccountTitle,
} from './PersonalAccountPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectUserStatus } from 'redux/authRedux/selectors';
import { fetchMyAnswers } from 'redux/surveysRedux/operations';

const PersonalAccountPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectUserStatus);

  useEffect(() => {
    status === 'GUEST' && dispatch(fetchMyAnswers());
  }, [dispatch, status]);

  return (
    <PersonalAccountWrapper>
      <PersonalAccountTitle>Personal account</PersonalAccountTitle>
      <PersonalAccount />
    </PersonalAccountWrapper>
  );
};

export default PersonalAccountPage;
