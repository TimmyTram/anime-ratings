'use client';

import { Role } from "@prisma/client";
import { useSession } from "next-auth/react";
import useDeleteComment from "@/app/hooks/backend/useDeleteComment";
import toast from "react-hot-toast";

interface CommentControlProps {
    commentId: string;
    onDelete: () => void;
} 

const CommentControl = ({ commentId, onDelete }: CommentControlProps) => {
    const {data: session} = useSession();
    const { loading, deleteComment } = useDeleteComment();
    
    if(!session || session.user.role !== Role.ADMIN) return null;

    const handleDelete = async () => {
        const res = await deleteComment(commentId, session);
        if(res.status === 'success') {
            onDelete(); // tell parent component to update
            toast.success(res.message);
        } else {
            toast.error(res.message);
        }
    }

    return (
        <div>
            <button onClick={handleDelete} className="text-angryred">Delete</button>
        </div>
    );
};

export default CommentControl;