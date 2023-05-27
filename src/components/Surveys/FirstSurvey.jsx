import { PersonalAccountWrapper } from 'pages/PersonalAccountPage/PersonalAccountPage.styled';
import { Form, Label, Input, Btn } from './Survey.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFirstAnswer } from 'redux/surveysRedux/operations';
import { errorMessage, successMessage } from 'services/notifications';

const FirstSurvey = () => {
  const [firstQuestion, setFirstQuestion] = useState('');
  const [secondQuestion, setSecondQuestion] = useState('');
  const [thirdQuestion, setThirdQuestion] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (firstQuestion.length > 20 || firstQuestion.length < 3) {
      return errorMessage(`Please enter a valid name!`);
    }
    if (secondQuestion.length > 20 || secondQuestion.length < 3) {
      return errorMessage(`Please enter a valid name!`);
    }
    if (thirdQuestion.length > 20 || thirdQuestion.length < 3) {
      return errorMessage(`Please enter a valid name!`);
    }

    dispatch(addFirstAnswer({ firstQuestion, secondQuestion, thirdQuestion }));
    successMessage(` Successfully sent! `);
    setFirstQuestion('');
    setSecondQuestion('');
    setThirdQuestion('');
  };

  return (
    <PersonalAccountWrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          First question
          <Input
            onChange={e => setFirstQuestion(e.currentTarget.value)}
            value={firstQuestion}
            type="text"
            name="firstQuestion"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </Label>

        <Label>
          Second question
          <Input
            onChange={e => setSecondQuestion(e.currentTarget.value)}
            value={secondQuestion}
            type="text"
            name="secondQuestion"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </Label>

        <Label>
          Third question
          <Input
            onChange={e => setThirdQuestion(e.currentTarget.value)}
            value={thirdQuestion}
            type="text"
            name="thirdQuestion"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </Label>

        <Btn type="onSubmit">Send</Btn>
      </Form>
    </PersonalAccountWrapper>
  );
};

export default FirstSurvey;
