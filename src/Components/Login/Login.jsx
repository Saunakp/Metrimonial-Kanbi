import React from "react";
// import '../style.css';
import "../Login/Loginstyle.css";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Login = () => {
  // const navigate = useNavigate();

  const onSubmit = () => {
    // navigate("/")
  };

  return (
    <>
      <div className="login_main">
        <div className="login_container">
          <div className="screen">
            <div className="screen__content">
              <form className="login">
                <h1 className="login-header">Login</h1>
                <hr />
                <div className="login__field">
                  <i className="login__icon fas fa-user"><FaUser /></i>
                  <input
                    type="text"
                    className="login__input"
                    placeholder="User name / Email"
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"><FaLock /></i>
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                  />
                </div>
                <button className="button login__submit" onClick={onSubmit}>
                  <span className="button__text mx-2">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right"><FaChevronRight /></i>
                </button>
              </form>
              <div className="social-login">
                {/* <h3>log in via</h3> */}
                <div className="social-icons">
                  <div className="icon-google">
                  <a
                   
                    className="social-login__icon"
                  ><FcGoogle /></a>
                  <p className="google my-1">Login via Google</p>
                  </div>
                  
                  <div className="icon-facebook">
                  <a
                    
                    className="social-login__icon"
                  ><FaFacebook /></a>
                   <p className="Facebook my-1">Login via Facebook</p>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Login;
