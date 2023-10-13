import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Container, Nav, NavbarBrand } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/slices/user-slice";
import { RootState } from "../redux/store";

type Props = {
  user: User | null;
  isLoggedIn: boolean;
  token: string;
};

interface User {
  username: string;
  name: string;
}

const Navbar = () => {
  const { user, isLoggedIn, token }: Props = useSelector(
    (state: RootState) => state.user
  );

  const [userIsLoggedIn, setuserIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  // console.log(user);
  // console.log(getToken);

  const retrievedStatus = (token: string | null) => {
    if (token) {
      setuserIsLoggedIn(true);
    } else {
      setuserIsLoggedIn(false);
    }
  };

  const logoutHandler = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    const getToken =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    retrievedStatus(getToken);
  }, []);

  return (
    <>
      <NavbarBrand color="#000">
        <Container>
          <Nav className="me-auto">
            <div className="mx-3">
              <Link href="/products">All Products</Link>
            </div>
            {userIsLoggedIn && (
              <div className="mx-3">
                <Link href="/cart">Cart</Link>
              </div>
            )}
            <div className="mx-3">
              <Button onClick={logoutHandler}>Logout</Button>
            </div>
          </Nav>
        </Container>
      </NavbarBrand>
    </>
  );
};

export default Navbar;
