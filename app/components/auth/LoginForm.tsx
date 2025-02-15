'use client';

import toast from 'react-hot-toast';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

interface LoginFormProps {
    onLoginSuccess: () => void;
}

const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
    const [userInfo, setUserInfo] = useState({ login: '', password: '' });
    const [error, setError] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const router = useRouter();
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); // Reset error state
    
        const result = await signIn('credentials', {
          redirect: false,
          username: userInfo.login,
          password: userInfo.password,
        });
    
        if (result?.error) {
          setError('Username or password is incorrect');
          setIsInvalid(true); // Set invalid state
          setUserInfo({ ...userInfo, password: '' }); // Clear the password field
          passwordRef.current?.focus(); // Set focus to password field
        } else {
          toast.success(`Welcome ${userInfo.login}!`);

          // let parent component know that login was successful
          onLoginSuccess();
          //router.push('/');
        }
      };

    return (
        <div className="text-black flex flex-col items-center justify-center gap-12"> 
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
                <div>
                    <input
                        id="login"
                        type="text"
                        placeholder="Type Your Username"
                        value={userInfo.login}
                        onChange={(e) => setUserInfo({ ...userInfo, login: e.target.value })}
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
                        ref={passwordRef}
                        autoComplete='off'
                        className="text-white placeholder-white bg-primary border-b-4 border-b-white p-2 focus:outline-white"
                    />
                </div>
                <button type="submit" className="text-white font-bold bg-complementary border-2 border-complementary rounded-full px-4 py-2 shadow-md hover:bg-softcomplementary">Login</button>
                {error && <p className="font-bold text-angryred">{error}</p>}
            </form>
        </div>
    );
}

export default LoginForm;