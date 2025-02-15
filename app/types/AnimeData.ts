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
            large_image_url: string; // MAL large image url
        }
    }
    airing: boolean;
    background: string;
    broadcast: {
        day: string;
        time: string;
        timezone: string;
        string: string;
    };
    duration: string;
    episodes: number;
    genres: AnimeGenres[];
    trailer: AnimeTrailer;
    source: string;
    season: string;
    producers: AnimeProducers[];
    licensors: AnimeLicensors[];
    studios: AnimeStudios[];
};

export interface AnimeStudios {
    mal_id: number;
    type: string;
    name: string;
    url: string;
};

export interface AnimeLicensors {
    mal_id: number;
    type: string;
    name: string;
    url: string;
};

export interface AnimeProducers {
    mal_id: number;
    type: string;
    name: string;
    url: string;
};

export interface AnimeGenres {
    mal_id: number;
    type: string;
    name: string;
    url: string;
};

export interface AnimeTrailer {
    embed_url: string;
    url: string;
};