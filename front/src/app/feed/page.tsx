"use client";

import { useState } from "react";
import App from "../../components/App";
import Feed from "../../components/Feed";

export default function FeedPage() {
  const [active, setActive] = useState("feed");
  
  return (
    <App>
      <Feed active={active} setActive={setActive} />
    </App>
  );
}