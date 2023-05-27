import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authRedux/operations';
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
} from '../RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
        <Input type="email" name="email" placeholder="Email" required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <ModifiedButton type="submit">Log In</ModifiedButton>
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
