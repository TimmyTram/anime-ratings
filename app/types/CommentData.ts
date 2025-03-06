// comment data interface for my backend, not Jikan API comments
export interface CommentData {
    id: string;
    userId: string;
    animePostId: string;
    mangaPostId: string;
    creationDate: string;
    text: string;
    user: {
        username: string;
        role: string;
    }
};