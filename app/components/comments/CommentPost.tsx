'use client';

import { useState } from 'react';
import useCreateComment from '@/app/hooks/backend/useCreateComment';
import { Session } from 'next-auth';
import { CommentData } from '@/app/types/CommentData';
import toast from 'react-hot-toast';

interface CommentPostProps {
    session: Session;
    mal_id: number;
    type: "anime" | "manga";
}

const CommentPost = ({ session, mal_id, type }: CommentPostProps) => {
    const { loading, createComment } = useCreateComment();
    const [comment, setComment] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!session) return;
        if(!comment) return;
        const status = await createComment(session, mal_id, { text: comment } as CommentData);
        if(status.success) {
            toast.success(status.message);
            setComment('');
        } else {
            console.log(status.message);
            toast.error(status.message);
        }
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-black"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                >
                    {loading ? 'Posting...' : 'Post Comment'}
                </button>
            </form>
        </div>
    );

};

export default CommentPost;