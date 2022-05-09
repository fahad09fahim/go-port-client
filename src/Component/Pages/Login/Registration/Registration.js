import React, { useRef, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Registration = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  let errorElement;

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(name, email, password);
  };
  const navigateLogin = () => {
    navigate("/login");
  };
  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate("/");
  }
  if (error) {
    errorElement = <p className="text-warning"> {error?.message}</p>;
  }
  return (
    <div class="login">
      <div class="login-triangle"></div>

      <h2 class="login-header">Registration</h2>

      <form onSubmit={handleSubmit} class="login-container">
        <p>
          <input ref={nameRef} type="text" placeholder="Name" required />
        </p>
        <p>
          <input ref={emailRef} type="email" placeholder="Email" required />
        </p>
        <p>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </p>
        <p className="d-flex align-items-center flex-column">
          <input
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            id="terms"
          />
          <label
            className={`mb-2  ${agree ? "" : "text-danger"} `}
            htmlFor="terms"
          >
            I accept terms and condition
          </label>
        </p>
        <p>
          <input disabled={!agree} type="submit" value="Log in" />
        </p>
      </form>
      <p className="text-center">
        Already have an Account?
        <Link to="/login" className="text-info" onClick={navigateLogin}>
          Log in
        </Link>
      </p>
      <SocialLogin></SocialLogin>
      {errorElement}
    </div>
  );
};

export default Registration;
