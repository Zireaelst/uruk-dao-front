"use client";

import { useState } from "react";
import App from "../../components/App";
import Community from "../../components/Community";

export default function CommunityPage() {
  const [active, setActive] = useState("community");
  
  return (
    <App>
      <Community active={active} setActive={setActive} />
    </App>
  );
}