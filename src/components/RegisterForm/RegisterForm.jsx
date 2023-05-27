import { useDispatch } from 'react-redux';
import { register } from 'redux/authRedux/operations';
import {
  Container,
  Form,
  FormTitle,
  Input,
  ModifiedButton,
  DropFirst,
  DropSecond,
  DropThird,
  DropForth,
  DropFifth,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        username: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormTitle>Welcome</FormTitle>
        <Input type="text" name="username" placeholder="Username" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <ModifiedButton variant="contained" type="submit">
          Sign Up
        </ModifiedButton>
      </Form>
      <div>
        <DropFirst></DropFirst>
        <DropSecond></DropSecond>
        <DropThird></DropThird>
        <DropForth></DropForth>
        <DropFifth></DropFifth>
      </div>
    </Container>
  );
};
