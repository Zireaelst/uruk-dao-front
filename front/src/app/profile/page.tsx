"use client";

import { useState } from "react";
import App from "../../components/App";
import Profile from "../../components/Profile";

export default function ProfilePage() {
  const [active, setActive] = useState("profile");
  
  return (
    <App>
      <Profile active={active} setActive={setActive} />
    </App>
  );
}