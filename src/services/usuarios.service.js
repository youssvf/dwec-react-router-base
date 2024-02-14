const login = async (alias, password) => {
  /*
    fetch("http://localhost:8080/api/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ alias, password }),
    })
      .then((data) => data.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
      });
        */
  const data = await fetch("http://localhost:8080/api/usuarios/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ alias, password }),
  });
  const json = await data.json();
  guardarLector(alias);
  guardarToken(json.token);
};


const registro = async(alias,password) => {
  const data = await fetch('http://localhost:8080/api/usuarios/registro', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ alias, password }),
  });
  const json = await data.json();
  console.log(json.alias);
}

export { login, registro };


function guardarLector(lector){
  localStorage.removeItem(lector);
  localStorage.setItem('lector', lector);
}

function guardarToken(token){
  localStorage.removeItem('token');
  localStorage.setItem("token", token);
}