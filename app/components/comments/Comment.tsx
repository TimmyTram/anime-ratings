'use client';

interface CommentProps {
    creationDate: string;
    text: string;
    username: string;
    role: string;
}

const Comment = ({ creationDate, text, username, role }: CommentProps) => {
    return (
        <div className="flex flex-row gap-4 p-4 bg-secondarydark rounded-lg shadow-lg">
            <div className="flex flex-col gap-2">
                <span className={`${role === 'ADMIN' ? 'text-primary text-semibold' : 'text-white'}`}>{username}</span>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">{new Date(creationDate).toDateString()}</span>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default Comment;