"use client";

import { useState } from "react";
import App from "../components/App";
import Home from "../components/Home";

export default function HomePage() {
  const [active, setActive] = useState("home");

  return (
    <App>
      <Home active={active} setActive={setActive} />
    </App>
  );
}
