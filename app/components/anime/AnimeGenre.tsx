import { AnimeGenres } from "@/app/types/AnimeData";

interface AnimeGenreProps {
    genre: AnimeGenres[] | undefined;
}

const AnimeGenre = ({ genre }: AnimeGenreProps) => {
    return (
        <div className="flex flex-row gap-4">
            <h2 className="text-xl font-bold flex items-center justify-center">Genres:</h2>
            {genre && genre.map((genre) => (
                <span
                    key={genre.mal_id}
                    className="font-bold bg-purplegrad px-4 py-2 shadow-md rounded-full"
                >
                    {genre.name}
                </span>
            ))}
        </div>
    );
};

export default AnimeGenre;