'use client';

import { useState, useEffect } from 'react';
import { CommentData } from '../../types/CommentData';

/**
 * 
 * @param mal_id Jikan Mal ID
 * @param type Anime or Manga route
 * @returns comments and loading state
 */
const useFetchComments = (mal_id: number, type: 'anime' | 'manga') => {
    const [comments, setComments] = useState<CommentData[]>([]);
    const [loading, setLoading] = useState(true);

    // load comments on first render
    useEffect(() => {
        const fetchComments = async () => {
            setLoading(true);
            const res = await fetch(`/api/${type}/${mal_id}`);
            const data = await res.json();
            setComments(data);
            setLoading(false);
        };

        fetchComments();
    }, [mal_id, type]);

    return { comments, loading };
};

export default useFetchComments;