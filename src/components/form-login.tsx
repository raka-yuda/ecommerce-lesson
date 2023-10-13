import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/slices/user-slice";
import { RootState } from "../redux/store";

type Props = {
  user: User | null;
  isLoggedIn: boolean;
};

interface User {
  username: string;
  name: string;
}

const FormLogin = () => {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const { user, isLoggedIn }: Props = useSelector(
    (state: RootState) => state.user
  );

  const dispatch = useDispatch();

  const buttonHandler = () => {
    const username = usernameInputRef?.current?.value;
    const password = passwordInputRef?.current?.value;

    console.log(username);
    console.log(password);
  };

  const submitHandler = () => {
    const username = usernameInputRef?.current?.value;
    const password = passwordInputRef?.current?.value;
    const token = "IS_LOGGED_IN";
    dispatch(userLogin({ username, password, token }));
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          ref={usernameInputRef}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          ref={passwordInputRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default FormLogin;
