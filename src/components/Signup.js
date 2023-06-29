import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertContext } from "../context/notes/alertContext";
import NoteContext from "../context/notes/noteContext";

export default function Signup() {
  const { showAlert } = useContext(AlertContext);

  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const { host } = useContext(NoteContext);

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credential.password === credential.cpassword) {
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credential.name,
          email: credential.email,
          password: credential.password,
        }),
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authToken);
        navigate("/");
        showAlert("Account Created Succesfully", "success");
      } else {
        showAlert("Invalid Details", "Danger");
      }
    } else {
      showAlert("Password does not Match", "warning");
    }
  };
  return (
    <div className="" style={{ marginTop: "50px" }}>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-5 col-md-6 col-sm-8">
          <div className="card shadow">
            <div className="card-title text-center border-bottom">
              <h2 className="p-2 text-primary">
                <b> Sign Up</b>
              </h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    aria-describedby="emailHelp"
                    value={credential.name}
                    onChange={handleChange}
                  />
                </div>
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
                <div className="mb-4">
                  <label htmlFor="cpassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="cpassword"
                    name="cpassword"
                    value={credential.cpassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <div className="my-2">
                  <span>
                    Back to <Link to={"/login"}>Login</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
