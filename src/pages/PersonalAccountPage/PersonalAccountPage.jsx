import { PersonalAccount } from 'components/PersonalAccount/PersonalAccount';
import {
  PersonalAccountWrapper,
  PersonalAccountTitle,
} from './PersonalAccountPage.styled';

const PersonalAccountPage = () => {
  return (
    <PersonalAccountWrapper>
      <PersonalAccountTitle>Personal account</PersonalAccountTitle>
      <PersonalAccount />
    </PersonalAccountWrapper>
  );
};

export default PersonalAccountPage;
