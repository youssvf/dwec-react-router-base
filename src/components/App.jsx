import { Outlet } from "react-router-dom";

import Nav from "./Nav";
import { useState } from "react";

export default function App() {

  const [lector, setLector] = useState(null);
  return (
    <>
      <Nav lector={lector} setLector={setLector} />
      <Outlet context={[lector, setLector]} />
    </>
  );
}
