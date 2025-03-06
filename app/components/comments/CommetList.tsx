'use client';

import { CommentData } from "@/app/types/CommentData";
import Comment from "./Comment";

interface CommentListProps {
    comments: CommentData[];
}

const CommentList = ({ comments }: CommentListProps) => {
    return (
        <div className="flex flex-col gap-4">
            {comments && comments.map(comment => (
                <Comment
                    key={comment.id}
                    creationDate={comment.creationDate}
                    text={comment.text}
                    username={comment.user.username}
                    role={comment.user.role}
                />
            ))}
        </div>
    );
};

export default CommentList;