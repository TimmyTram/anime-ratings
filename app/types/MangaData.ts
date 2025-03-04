export interface MangaData {
    mal_id: number; // MAL id
    title: string;
    title_english: string;
    title_japanese: string;
    rank: number;
    synopsis: string;
    type: string;
    url: string; // MAL url
    score: number; // MAL score
    status: string;
    images: MangaImage;
    chapters: number;
    volumes: number;
    published: MangaPublished;
    authors: MangaAuthors[];
    serialization: MangaSerialization[];
    genres: MangaGenres[];
    themes: MangaThemes[];
    demographics: MangaDemographics[];
};

export interface MangaImage {
    jpg: {
        image_url: string;
        large_image_url: string;
    }
}

export interface MangaPublished {
    from: string;
    to: string;
    prop: {
        from: {
            day: number;
            month: number;
            year: number;
        },
        to: {
            day: number;
            month: number;
            year: number;
        }
    }
    string: string;
}

export interface MangaAuthors {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface MangaSerialization {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface MangaGenres {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface MangaThemes {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface MangaDemographics {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}