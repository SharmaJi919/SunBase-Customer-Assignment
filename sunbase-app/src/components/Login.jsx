import React, { useContext, useState } from "react";
import { authContext } from "../context/AuthContextProvider";
import "../App.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const { login } = useContext(authContext);

  let submitting = async (event) => {
    event.preventDefault();
    try {
      let res = await fetch(
        `https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      let data = await res.json();
      console.log(data.token);
      login(data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="email"
        placeholder="login id"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <br />
      <button
        style={{ backgroundColor: "teal", color: "white" }}
        onClick={submitting}
      >
        Submit
      </button>
    </div>
  );
}
