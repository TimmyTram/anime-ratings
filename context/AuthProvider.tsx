"use client";

import { Session } from "next-auth";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface AuthProviderProps {
    children: ReactNode;
    session?: Session | null;
}

export default function AuthProvider({ children, session }: AuthProviderProps) {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
}