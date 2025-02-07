'use client';

import React from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "authenticated") {
        router.push('/');
    }

    return <LoginForm />;
}

export default LoginPage;