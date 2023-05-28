import { useSelector } from 'react-redux';
import { selectUserStatus } from 'redux/authRedux/selectors';
import {
  Wrapp,
  Text,
  BtnsWrapp,
  StyledLink,
  DisBtn,
} from './PersonalAccount.styled';
import {
  selectFirstAnswerStatus,
  selectSecondAnswerStatus,
} from 'redux/surveysRedux/selectors';

export const PersonalAccount = () => {
  const status = useSelector(selectUserStatus);

  const firstAnswerStatus = useSelector(selectFirstAnswerStatus);
  const secondAnswerStatus = useSelector(selectSecondAnswerStatus);

  return (
    <Wrapp>
      {status === 'GUEST' ? (
        <>
          <Text>
            Welcome to your personal account, GUEST ! <br /> You need to
            complete our survey. Here you can go to the first part or to the
            second. <br /> Be careful, each part of the survey can be taken only
            once! Moving on to the survey itself, you need to fill in the fields
            and submit the form. We will see the results of your answers. <br />{' '}
            Thank you!
          </Text>

          <BtnsWrapp>
            {firstAnswerStatus === false ? (
              <StyledLink to="/first_survey">
                First part of the survey
              </StyledLink>
            ) : (
              <DisBtn>Answers sent</DisBtn>
            )}
            {firstAnswerStatus === true && secondAnswerStatus === false ? (
              <StyledLink to="/second_survey">
                Second part of the survey
              </StyledLink>
            ) : secondAnswerStatus === false ? (
              <DisBtn>Second part of the survey</DisBtn>
            ) : (
              <DisBtn>Answers sent</DisBtn>
            )}
          </BtnsWrapp>
        </>
      ) : (
        <>
          <Text>Your welcome, ADMIN !</Text>
          <BtnsWrapp>
            <StyledLink to="/first_surveys_results">
              First part of the survey
            </StyledLink>
            <StyledLink to="/second_surveys_results">
              Second part of the survey
            </StyledLink>
          </BtnsWrapp>
        </>
      )}
    </Wrapp>
  );
};
