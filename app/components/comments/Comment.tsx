'use client';

import AdminIcon from "../icons/Admin.icon";
import CommentControl from "./CommentControl";

interface CommentProps {
    id: string;
    creationDate: string;
    text: string;
    username: string;
    role: string;
    onDeleteComment: (commentId: string) => void;
}

const Comment = ({ id, creationDate, text, username, role, onDeleteComment }: CommentProps) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-secondarydark rounded-lg shadow-lg">
            <div className="flex flex-row gap-2">
                <span className={`${role === 'ADMIN' ? 'text-primary font-semibold' : 'text-white'}`}>{username}</span>
                {role === 'ADMIN' && <AdminIcon size={20} color="blue" className="bg-primary" />}
            </div>
            <div className="flex flex-col gap-2 w-full">
                <span className="text-sm text-gray-400">{new Date(creationDate).toDateString()}</span>
                <span className="px-2 md:px-8 break-words">{text}</span>
            </div>
            <div className="flex flex-col justify-end">
                <CommentControl commentId={id} onDeleteComment={onDeleteComment} />
            </div>
        </div>
    );
};

export default Comment;