'use client';

import { useState } from 'react';
import { Session } from 'next-auth';
import { CommentData } from '../../types/CommentData';

/**
 * @returns {Object} - Returns an object with the following properties:
 * - createComment: A function that creates a comment on an anime or manga.
 * - loading: A boolean that indicates if the request is loading.
 */
const useCreateComment = () => {
    const [loading, setLoading] = useState(false);

    const createComment = async (session: Session, mal_id: number, body: CommentData, type: 'anime' | 'manga') => {
        setLoading(true);
        try {
            if(!session) throw new Error('You must be logged in to comment.');

            // Ensure type is valid
            if (type !== 'anime' && type !== 'manga') {
                throw new Error('Invalid type, must be either "anime" or "manga".');
            }

            const res = await fetch(`/api/${type}/${mal_id}`, {
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
                message: data.message,
                data: data
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