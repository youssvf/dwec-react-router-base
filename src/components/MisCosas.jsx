import { useEffect, useState } from "react";

export default function MisCosas() {
  const [cosas, setCosas] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/cosas", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCosas(data);
        console.log(data);
      });
  }, []);

  return <h1>Mis cosas</h1>;
}
