'use client';

import { CommentData } from "@/app/types/CommentData";
import Comment from "./Comment";

interface CommentListProps {
    comments: CommentData[];
}

const CommentList = ({ comments }: CommentListProps) => {
    return (
        <div className="flex flex-col gap-4 w-full max-w-[1600px] mx-auto">
            {comments.length === 0 ? (
                <div className="w-full bg-secondarydark p-8 flex flex-col justify-center items-center rounded-lg shadow-lg">
                    <p>There are no comments yet.</p>
                    <p>Be the first to comment.</p>
                </div>
            ) : (
                comments.map(comment => (
                    <Comment
                        key={comment.id}
                        creationDate={comment.creationDate}
                        text={comment.text}
                        username={comment.user.username}
                        role={comment.user.role}
                    />
                ))
            )}
        </div>
    );
};

export default CommentList;