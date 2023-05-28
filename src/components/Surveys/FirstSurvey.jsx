import { PersonalAccountWrapper } from 'pages/PersonalAccountPage/PersonalAccountPage.styled';
import { Form, Label, Input, Btn } from './Survey.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFirstAnswer } from 'redux/surveysRedux/operations';
import { errorMessage, successMessage } from 'services/notifications';

const FirstSurvey = () => {
  const [fullName, setFullName] = useState('');
  const [education, setEducation] = useState('');
  const [courses, setCourses] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (fullName.length > 50 || fullName.length < 3) {
      return errorMessage(`Please enter a valid value!`);
    }
    if (education.length > 50 || education.length < 3) {
      return errorMessage(`Please enter a valid value!`);
    }
    if (courses.length > 50 || courses.length < 3) {
      return errorMessage(`Please enter a valid value!`);
    }

    dispatch(addFirstAnswer({ fullName, education, courses }));
    successMessage(` Successfully sent! `);
    setFullName('');
    setEducation('');
    setCourses('');
  };

  return (
    <PersonalAccountWrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Full name
          <Input
            onChange={e => setFullName(e.currentTarget.value)}
            value={fullName}
            type="text"
            name="fullName"
            placeholder="Anton Tkachenko"
            required
          />
        </Label>
        <Label>
          Technical education(Yes/No)
          <Input
            onChange={e => setEducation(e.currentTarget.value)}
            value={education}
            type="text"
            name="education"
            placeholder="Yes"
            required
          />
        </Label>
        <Label>
          Technical courses(Yes/No)
          <Input
            onChange={e => setCourses(e.currentTarget.value)}
            value={courses}
            type="text"
            name="courses"
            placeholder="Yes"
            required
          />
        </Label>
        <Btn type="submit">Send</Btn>
      </Form>
    </PersonalAccountWrapper>
  );
};

export default FirstSurvey;
