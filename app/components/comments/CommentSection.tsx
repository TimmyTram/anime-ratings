'use client';

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import useFetchComments from "@/app/hooks/backend/useFetchComments";
import CommentList from "./CommentList";
import CommentPost from "./CommentPost";
import { CommentData } from "@/app/types/CommentData";

interface CommentSectionProps {
    mal_id: number;
    type: 'anime' | 'manga';
}

const CommentSection = ({ mal_id, type }: CommentSectionProps) => {
    const { data: session } = useSession();
    const { comments, loading, loadMoreComments, hasMore } = useFetchComments(mal_id, type, 10);
    const [commentList, setCommentList] = useState<CommentData[]>(comments);

    useEffect(() => {
        setCommentList(comments);
    }, [comments]);

    const handleAddComment = (newComment: CommentData) => {
        setCommentList((prev) => [...prev, newComment]);
    }

    const handleDeleteComment = (commentId: string) => {
        setCommentList((prev) => prev.filter(comment => comment.id !== commentId));
    };

    return (
        <div className="w-full max-w-[1600px] mx-auto p-4 space-y-4">
            {session ? (
                <CommentPost session={session} mal_id={mal_id} type={type} onAddComment={handleAddComment} />
            ) : (
                <p>You must Login to Comment</p>
            )}

            <CommentList comments={commentList} onDeleteComment={handleDeleteComment} />

            {loading && <p>Loading...</p>}

            {hasMore && (
                <div className="flex justify-center">
                    <button
                        onClick={loadMoreComments}
                        className="w-full max-w-md bg-secondarydark p-4 rounded-lg shadow-lg"
                    >
                        Load More Comments
                    </button>
                </div>
            )}

        </div>
    );
};

export default CommentSection;