"use client";

import ProtectedRoute from "@/components/WhenLoggedIn";
import withAuth from "@/components/WhenLoggedIn";
import React from "react";

function Dashboard() {
  return (
    // <ProtectedRoute>
      <div>
        <h1>Dahboard</h1>
      </div>
    // {/* </ProtectedRoute> */}
  );
}

export default Dashboard;
