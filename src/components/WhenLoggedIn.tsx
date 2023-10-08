// "use client";

// import { useAuth } from "@/context/AuthContext";
// import { usePathname, useRouter } from "next/navigation";
// import { ReactNode, useEffect } from "react";

// interface Props {
//   protectedRoutes: string[];
//   children: ReactNode;
// }

// const protectedRoutes = ["/dashboard"];

// export default function PrivateRoute({ protectedRoutes, children }: Props) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const { user, loading } = useAuth();

//   const pathIsProtected = protectedRoutes.indexOf(pathname) !== -1;

//   useEffect(() => {
//     if (!loading && !user && pathIsProtected) {
//       // Redirect route, you can point this to /login
//       router.push("/");
//     }
//   }, [loading, user, pathIsProtected]);

//   if ((loading || !user) && pathIsProtected) {
//     return <FullPageLoader />;
//   }

//   return children;
// }

import React, { ReactNode, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

const protectedRoutes = ["/dashboard"];

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const pathIsProtected = protectedRoutes.indexOf(pathname) !== -1;

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user, pathIsProtected]);

  //   if (!user && pathIsProtected) {
  //     return <FullPageLoader />;
  //   }

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
