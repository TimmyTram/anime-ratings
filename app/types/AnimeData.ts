export interface AnimeData {
    mal_id: number; // MAL id
    title: string;
    title_english: string;
    title_japanese: string;
    rank: number;
    synopsis: string;
    year: number;
    url: string; // MAL url
    score: number; // MAL score
    images: {
        jpg: {
            image_url: string; // MAL image url
        }
    }
};