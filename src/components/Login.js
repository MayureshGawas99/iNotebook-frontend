import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertContext } from "../context/notes/alertContext";

export default function Login() {
  const { showAlert } = useContext(AlertContext);
  const [credential, setCredential] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
      showAlert("Logged in Succesfully", "success");
    } else {
      showAlert("Invalid Credentials", "danger");
    }
  };
  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="" style={{ marginTop: "150px" }}>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-5 col-md-6 col-sm-8">
            <div className="card shadow">
              <div className="card-title text-center border-bottom">
                <h2 className="p-2 text-primary">
                  <b> Login</b>
                </h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                      value={credential.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={credential.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                  <div className="my-2">
                    <span>
                      Don't have an account? <Link to={"/signup"}>Sign up</Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
