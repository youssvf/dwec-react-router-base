import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h1>Mi nav</h1>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/login">Login</Link>
        <Link to="/registro">Registro</Link>
      </div>
    </nav>
  );
}
