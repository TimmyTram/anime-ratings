export interface MangaStatisticsData {
    watching: number;
    completed: number;
    on_hold: number;
    dropped: number;
    plan_to_watch: number;
    scores: MangaScores[];
};

export interface MangaScores {
    scores: number;
    votes: number;
    percentage: number;
}