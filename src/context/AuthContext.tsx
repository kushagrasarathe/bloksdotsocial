"use client";

import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { usePathname, useRouter } from "next/navigation";
import React, {
  ReactNode,
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  email: string;
  password: string;
}

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({});

const supabase = createClientComponentClient();

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<null | any>(null);
  const [sessionKey, setSessionKey] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const currentPath = usePathname();

  const loginUser = async ({ email, password }: User) => {
    const user = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (user.data.session) {
      setSessionKey(user.data.session);
      setUser(user.data.user);
    }
  };

  useEffect(() => {
    const getAuthenticatedUser = async () => {
      const data = await supabase.auth.getUser(
        // @ts-ignore
        sessionKey
      );
      if (user === null) {
        // console.log(data);
        setUser(data);
      }
    };

    getAuthenticatedUser();
  }, []);

  return (
    <AuthContext.Provider value={{ loginUser, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
