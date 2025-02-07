'use client';

import toast from 'react-hot-toast';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
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
          router.push('/');
        }
      };

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login">Login</label>
                    <input
                        id="login"
                        type="text"
                        value={userInfo.login}
                        onChange={(e) => setUserInfo({ ...userInfo, login: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={userInfo.password}
                        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                        ref={passwordRef}
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default LoginForm;