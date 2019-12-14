import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import PropTypes from "prop-types";

const Login = ({ login, isAuthenticated }) => {
  const [formState, setformState] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formState;

  const onChange = e => {
    setformState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <section className="register">
      <div className="container">
        <div className="register-title">
          <h2 className="heading-2">Sign In</h2>
          <p className="register-title-desc">
            <i class="fas fa-user"></i> Sign in your Account
          </p>

          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                onSubmit={e => onChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                onSubmit={e => onChange(e)}
              />
            </div>

            <div className="form-group">
              <Link to="/register" className="btn-primary">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
