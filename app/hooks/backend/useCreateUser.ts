import { useState } from 'react';
import { UserData } from '../../types/UserData';

const useCreateUser = () => {
    const [loading, setLoading] = useState(false);

    const createUser = async (formData: UserData) => {
        setLoading(true);
        try {
            const res = await fetch(`api/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.error) throw new Error(data.error);
            return {
                success: true,
                message: data.message
            };
        } catch (error: any) {
            return {
                success: false,
                message: error.message
            };
        } finally {
            setLoading(false);
        }

    }

    return { createUser, loading };
}

export default useCreateUser;