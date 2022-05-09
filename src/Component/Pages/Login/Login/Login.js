import React, { useRef } from "react";
import "./Login.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (hookError) {
    errorElement = <p className="text-warning">{hookError?.message}</p>;
  }
  // handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };

  const navigateRegistration = () => {
    navigate("/registration");
  };
  // handle reset password
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Send Password Reset Email");
    } else {
      toast.warn("please Enter your email address!");
    }
  };

  return (
    <div class="login">
      <div class="login-triangle"></div>

      <h2 class="login-header">Log in</h2>

      <form onSubmit={handleSubmit} class="login-container">
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
        <p>
          <input type="submit" value="Log in" />
        </p>
        <div>
          <button
            className="btn btn-link text-danger text-decoration-none"
            onClick={resetPassword}
          >
            Forgot Password?
          </button>
        </div>
      </form>
      <p className="text-center">
        Don't have account?
        <Link
          to="/registration"
          onClick={navigateRegistration}
          className="text-success"
          href="#"
        >
          Create an Account.
        </Link>
      </p>
      <SocialLogin></SocialLogin>
      {errorElement}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;
