export interface AnimeStatisticsData {
    watching: number;
    completed: number;
    on_hold: number;
    dropped: number;
    plan_to_watch: number;
    scores: AnimeScores[];
};

export interface AnimeScores {
    scores: number;
    votes: number;
    percentage: number;
}