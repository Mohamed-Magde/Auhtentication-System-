import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password2, password } = formState;

  const onChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <section className="register">
      <div className="container">
        <div className="register-title">
          <h2 className="heading-2">Sign Up</h2>
          <p className="register-title-desc">
            <i className="fas fa-user"></i> Create An Account
          </p>

          <form className="form" action="" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Register"
                className="btn-primary input-btn"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
