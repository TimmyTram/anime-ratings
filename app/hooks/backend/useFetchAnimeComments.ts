'use client';

import { useState, useEffect } from 'react';
import { CommentData } from '../../types/CommentData';

const useFetchAnimeComments = (mal_id: number) => {
    const [comments, setComments] = useState<CommentData[]>([]);
    const [loading, setLoading] = useState(true);

    // load comments on first render
    useEffect(() => {
        const fetchComments = async () => {
            setLoading(true);
            const res = await fetch(`/api/anime/${mal_id}`);
            const data = await res.json();
            setComments(data);
            setLoading(false);
        };

        fetchComments();
    }, [mal_id]);

    return { comments, loading };
};

export default useFetchAnimeComments;