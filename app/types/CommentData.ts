// comment data interface for my backend, not Jikan API comments
export interface CommentData {
    id?: string;
    userId?: string;
    animePostId?: string;
    mangaPostId?: string;
    creationDate?: string;
    role?: string;

    text: string;
};