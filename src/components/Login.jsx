import { useEffect, useState } from "react";

export default function Login() {
  const [alias, setAlias] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ alias, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={doLogin}>
        <input
          name="alias"
          type="text"
          placeholder="Alias"
          value={alias}
          onChange={(e) => {
            setAlias(e.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
