'use client';

import { useState } from 'react';
import { UserData } from '../types/UserData';
import useCreateUser from '../hooks/useCreateUser';
import { toast } from 'react-hot-toast';

interface SignupFormProps {
    onSignupSuccess: () => void;
}


const SignupForm = ({ onSignupSuccess }: SignupFormProps) => {
    const [userInfo, setUserInfo] = useState<UserData>(
        {
            username: '',
            password: '',
        }
    );

    const { createUser, loading } = useCreateUser();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(userInfo);
        const status = await createUser(userInfo);

        if (status.success) {
            toast.success(status.message);
            onSignupSuccess();
        } else {
            toast.error(status.message);
        }
    }

    return (
        <div className="text-black flex flex-col items-center justify-center gap-12">
            <h1 className="text-4xl font-bold text-white">
                Create an Account
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
                <div>
                    <input
                        id="username"
                        type="text"
                        placeholder="Type Your Username"
                        value={userInfo.username}
                        onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
                        autoComplete='off'
                        className="text-white placeholder-white bg-primary border-b-4 border-b-white p-2 focus:outline-white"
                    />
                </div>
                <div>
                    <input
                        id="password"
                        type="password"
                        placeholder="Type Your Password"
                        value={userInfo.password}
                        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                        autoComplete='off'
                        className="text-white placeholder-white bg-primary border-b-4 border-b-white p-2 focus:outline-white"
                    />
                </div>

                <button type="submit" className="text-white bg-purplegrad border-purplegrad border-2 px-4 py-2 shadow-md rounded-full hover:bg-softpurplegrad">
                    {loading ? "Creating Account..." : "Create Account"}
                </button>
            </form>
        </div>
    )
}

export default SignupForm;