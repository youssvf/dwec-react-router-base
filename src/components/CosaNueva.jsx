import { useState } from "react";

export default function CosaNueva() {
  const [nombre, setNombre] = useState("");

  const doSave = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/api/cosas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ nombre }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data);
      });
  };

  return (
    <form onSubmit={doSave}>
      <input
        name="nombre"
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
        }}
      />
      <button>Enviar</button>
    </form>
  );
}
