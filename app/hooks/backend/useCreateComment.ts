

import { useState } from 'react';
import { Session } from 'next-auth';
import { CommentData } from '../../types/CommentData';

const useCreateComment = () => {
    const [loading, setLoading] = useState(false);

    const createComment = async (session: Session, mal_id: number, body: CommentData) => {
        setLoading(true);
        try {
            if(!session) throw new Error('You must be logged in to comment.');
            const res = await fetch(`/api/anime/${mal_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
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
            }
        } finally {
            setLoading(false);
        }
    };
    
    return { createComment, loading };
};

export default useCreateComment;