import { PersonalAccountWrapper } from 'pages/PersonalAccountPage/PersonalAccountPage.styled';
import { Form, Label, Input, Btn } from './Survey.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSecondAnswer } from 'redux/surveysRedux/operations';
import { errorMessage, successMessage } from 'services/notifications';

const SecondSurvey = () => {
  const [position, setPosition] = useState('');
  const [stack, setStack] = useState('');
  const [salary, setSalary] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (position.length > 50 || position.length < 3) {
      return errorMessage(`Please enter a valid value!`);
    }
    if (stack.length > 50 || stack.length < 3) {
      return errorMessage(`Please enter a valid value!`);
    }
    if (salary.length > 20 || salary.length < 3) {
      return errorMessage(`Please enter a valid value!`);
    }

    dispatch(addSecondAnswer({ position, stack, salary }));
    successMessage(` Successfully sent! `);
    setPosition('');
    setStack('');
    setSalary('');
  };

  return (
    <PersonalAccountWrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Desired job position
          <Input
            onChange={e => setPosition(e.currentTarget.value)}
            value={position}
            type="text"
            name="position"
            placeholder="Full Stack developer"
            required
          />
        </Label>

        <Label>
          Technology stack
          <Input
            onChange={e => setStack(e.currentTarget.value)}
            value={stack}
            type="text"
            name="stack"
            placeholder="JavaScript, TypeScript, React.js, Node.js"
            required
          />
        </Label>

        <Label>
          Desired Salary
          <Input
            onChange={e => setSalary(e.currentTarget.value)}
            value={salary}
            type="text"
            name="salary"
            placeholder="400$ - 500$"
            required
          />
        </Label>

        <Btn type="submit">Send</Btn>
      </Form>
    </PersonalAccountWrapper>
  );
};

export default SecondSurvey;
