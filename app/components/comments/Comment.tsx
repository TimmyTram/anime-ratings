'use client';

import AdminIcon from "../icons/Admin.icon";

interface CommentProps {
    creationDate: string;
    text: string;
    username: string;
    role: string;
}

const Comment = ({ creationDate, text, username, role }: CommentProps) => {
    return (
        <div className="flex flex-row gap-4 p-4 bg-secondarydark rounded-lg shadow-lg">
            <div className="flex flex-row gap-2">
                <span className={`${role === 'ADMIN' ? 'text-primary font-semibold' : 'text-white'}`}>{username}</span>
                {role === 'ADMIN' && <AdminIcon size={20} color="blue" className="bg-primary" />}
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">{new Date(creationDate).toDateString()}</span>
                <span className="px-8">{text}</span>
            </div>
        </div>
    );
};

export default Comment;