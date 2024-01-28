import React, { useState } from "react";
import logo from "../Images/Untitled design.png";
import Login from "./Login/Login";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => {
    console.log("Click event execute")
    setShowLogin(true);
    
  };
  console.log(showLogin)
  return (
    <div>
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
          <div class="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              class="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <h3 className="text-light">Metrimonial</h3>
            </a>
          </div>

          <div class="col-md-3 text-end">
            <button
              type="button"
              class="btn btn-outline-light me-2"
              onClick={handleShowLogin}
            >
              Login
            </button>
            <button type="button" class="btn btn-primary">
              Sign-up
            </button>
          </div>
        </header>
      </div>

     {/* <div className="login"> */}
     {showLogin && <Login />}
     </div>
    // </div>
  );
};

export default Navbar;
