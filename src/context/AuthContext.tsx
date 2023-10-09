"use client";

import {
  Session,
  SupabaseClient,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { redirect, usePathname, useRouter } from "next/navigation";
import React, {
  ReactNode,
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

interface User {
  email: string;
  password: string;
}

interface AuthContextValue {
  loginUser: ({ email, password }: User) => void;
  signupUser: ({ email, password }: User) => void;
  logoutUser: () => void;
  user: Session | null;
  loading: boolean;
  supabase: SupabaseClient | null;
}

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextValue | {}>({});

const supabase = createClientComponentClient();

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<null | any>(null);
  const [sessionKey, setSessionKey] = useState<Session | null>(null);
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (user === null && pathName === "/dashboard") {
      router.push("/login");
    }
  }, [pathName]);

  const signupUser = async ({ email, password }: User) => {
    const user = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    console.log(user.error?.message);
    toast.error(`${user.error?.message}`);

    if (user.data.session) {
      setSessionKey(user.data.session);
      setUser(user.data.user);
      toast.success(`Account created, please verify your email`);
      // router.push("/dashboard");
    }
  };

  const loginUser = async ({ email, password }: User) => {
    const user = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // console.log(user.error?.message);
    toast.error(`${user.error?.message}`);
    if (user.data.session) {
      setSessionKey(user.data.session);
      setUser(user.data.user);
      toast.success(`Logged-in successfully`);
      router.push("/dashboard");
    }
  };

  const logoutUser = async () => {
    const data = await supabase.auth.signOut();
    console.log(data);
    setSessionKey(null);
    setUser(null);
    router.push("/login");
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

  const contextValue: AuthContextValue = {
    loginUser,
    signupUser,
    logoutUser,
    user,
    loading,
    supabase,
  };

  return (
    <AuthContext.Provider
      // value={{ loginUser, signupUser, logoutUser, user, loading, supabase }}
      value={contextValue}
    >
      {children}
    </AuthContext.Provider>
  );
}
