import React, { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(event) {
    event.preventDefault();
    axios
      .post("https://3001-4geeksacade-reactflaskh-r2prw6v3nin.ws-us94.gitpod.io/api/register", { email, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error.response.data);
      });
  }

  return (
    <form onSubmit={handleRegister} className="text-center mt-5">
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}