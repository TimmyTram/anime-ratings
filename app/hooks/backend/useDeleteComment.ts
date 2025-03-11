'use client';

import { Role } from '@prisma/client';
import { Session } from 'next-auth';
import { useState } from 'react';

const useDeleteComment = () => {
    const [loading, setLoading] = useState(true);

    const deleteComment = async (commentId: string, session: Session) => {
        try {
            if(!session || session.user.role !== Role.ADMIN) throw new Error('Unauthorized');
            const res = await fetch(`/api/comments/${commentId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            if(!data) throw new Error('Failed to delete comment');
            setLoading(false);
            return {
                status: "success",
                data: data,
                message: "Comment deleted successfully",
            }
        } catch (error : any) {
            return {
                status: "error",
                message: error.message,
            }
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }
    
    return { loading, deleteComment };
};

export default useDeleteComment;