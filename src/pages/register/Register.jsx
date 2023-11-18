import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Sync Together!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            velit explicabo commodi perspiciatis eveniet enim totam aspernatur
            error perferendis quis.
          </p>
          <span>Already have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
          <h1>Register</h1>
          <div className="form-container">
            <form action="">
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm password" />
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
