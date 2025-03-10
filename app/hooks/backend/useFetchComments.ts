'use client';

import { useState, useEffect, useCallback } from 'react';
import { CommentData } from '../../types/CommentData';

/**
 * 
 * @param mal_id id of anime or manga
 * @param type defines whether we should fetch anime or manga comments
 * @param limit max number of comments to fetch
 * @returns comments, loading, loadMoreComments, hasMore
 */
const useFetchComments = (mal_id: number, type: 'anime' | 'manga', limit: number = 10) => {
    const [comments, setComments] = useState<CommentData[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
    // memoize this function to prevent unnecessary re-renders in useEffect
    const fetchComments = useCallback(async (pageNum: number) => {
        setLoading(true);
        try {
            console.log(`[INFO]: Calling /api/${type}/${mal_id}?page=${pageNum}&limit=${limit}`);
            const res = await fetch(`/api/${type}/${mal_id}?page=${pageNum}&limit=${limit}`);
            const data = await res.json();
            
            // If we are fetching the first page, replace the comments with the new ones
            // Otherwise, append the new comments to the existing ones
            setComments((prev) => pageNum === 1 ? data.comments : [...prev, ...data.comments]);
            setTotalPages(data.pagination.totalPages);
        } catch (error) {
            console.error("Failed to fetch comments:", error);
        } finally {
            setLoading(false);
        }
    }, [mal_id, type, limit]);

    // Fetch initial comments
    useEffect(() => {
        fetchComments(1);
    }, [fetchComments]);

    // Load more comments
    const loadMoreComments = () => {
        if (page < totalPages) {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchComments(nextPage);
        }
    };

    return { comments, loading, loadMoreComments, hasMore: page < totalPages };
};

export default useFetchComments;
