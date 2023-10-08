"use client";

import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import React from "react";

function Dashboard() {
  const {  user, sessionKey, logoutUser } = useAuth();

  // if (!user) {
  //   redirect("/login");
  // }

  return (
    <div>
      <h1>Dahboard</h1>
      <button onClick={logoutUser}>logoutUser</button>
    </div>
  );
}

export default Dashboard;
