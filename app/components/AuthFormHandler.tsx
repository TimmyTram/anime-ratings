'use client';

import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface AuthFormHandlerProps {
    defaultToSignup?: boolean;
    onSuccess: () => void; // pass a function to be called on successful login/signup
}

/**
 * Component that toggles between showing the login and signup forms 
 */
const AuthFormHandler = ({ defaultToSignup = false, onSuccess }: AuthFormHandlerProps) => {
    const [isLogin, setIsLogin] = useState(!defaultToSignup);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-primary p-8 rounded-lg flex flex-col items-center gap-4">
                <h1 className="text-4xl font-bold text-white">
                    {isLogin ? 'Login To Your Account' : 'Sign Up'}
                </h1>
                {isLogin ? (
                    // if login success call this component's success function so we can close the modal in parent component
                    <LoginForm onLoginSuccess={onSuccess} />
                ) : (
                    <SignupForm onSignupSuccess={onSuccess} />
                )}
                <button onClick={() => setIsLogin(!isLogin)} className="text-white underline">
                    {isLogin ? 'Create an Account' : 'Login to your Account'}
                </button>
            </div>
        </div>
    );
}

export default AuthFormHandler;
