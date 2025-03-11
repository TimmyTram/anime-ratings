'use client';

import { useState } from 'react';
import useCreateComment from '@/app/hooks/backend/useCreateComment';
import { Session } from 'next-auth';
import { CommentData } from '@/app/types/CommentData';
import toast from 'react-hot-toast';
import { COMMENT_MAX_LENGTH } from '@/app/utils/constants';

interface CommentPostProps {
    session: Session;
    mal_id: number;
    type: "anime" | "manga";
    onAddComment: (newComment: CommentData) => void;
}

const CommentPost = ({ session, mal_id, type, onAddComment }: CommentPostProps) => {
    const { loading, createComment } = useCreateComment();
    const [comment, setComment] = useState<string>('');
    const [textareaFocused, setTextareaFocused] = useState<boolean>(false);
    const [placeholder, setPlaceholder] = useState<string>('Write a comment...');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!session) return;
        if (!comment) {
            toast.error('Comment cannot be empty.');
            return;
        }
        const status = await createComment(session, mal_id, { text: comment } as CommentData, type);
        if (status.success) {
            const newComment = { // have to create an object that matches what CommentList expects
                ...status.data,
                user: {
                    username: session.user.username,
                    role: session.user.role,
                }
            } as CommentData;
            onAddComment(newComment); // update parent component
            toast.success(status.message);
     
            // reset textarea
            setComment('');
            setPlaceholder('Write a comment...');
            setTextareaFocused(false);
        } else {
            console.log(status.message);
            toast.error(status.message);
        }
    };

    return (
        <div className="w-full max-w-[1600px]">
            <form onSubmit={handleSubmit}>
                <div className="relative w-full">
                    <textarea
                        name="comment"
                        value={comment}
                        maxLength={COMMENT_MAX_LENGTH}
                        onChange={(e) => setComment(e.target.value)}
                        onFocus={() => {
                            setPlaceholder('');
                            setTextareaFocused(true);
                        }}
                        onBlur={() => {
                            if (!comment) {
                                setPlaceholder('Write a comment...');
                                setTextareaFocused(false);
                            }
                        }}
                        placeholder={placeholder}
                        className={`w-full p-2 bg-secondarydark border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 transition-all ${textareaFocused ? 'focus:h-32' : 'focus:h-16'} ${comment ? 'h-32' : ''}`}
                    />
                    <button
                        type="submit"
                        disabled={loading || !comment}
                        className={`absolute bottom-4 right-4 px-4 py-2 bg-complementary border-complementary border-2 px-4 py-2 shadow-md rounded-full hover:bg-softcomplementary transition-colors duration-300 ${textareaFocused ? 'visible' : 'invisible'}`}
                    >
                        {loading ? 'Posting...' : 'Comment'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommentPost;
