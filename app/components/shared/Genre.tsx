import { MangaGenres } from '../../types/MangaData';
import { AnimeGenres } from '../../types/AnimeData';

interface GenreProps {
    genre: MangaGenres[] | AnimeGenres[] | undefined;
}

const Genre = ({ genre }: GenreProps) => {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:gap-4">
            <h2 className="text-xl font-bold flex items-center justify-center">Genres:</h2>
            {genre && genre.map((genre) => (
                <span
                    key={genre.mal_id}
                    className="flex font-bold bg-purplegrad px-4 py-2 shadow-md rounded-full items-center justify-center"
                >
                    {genre.name}
                </span>
            ))}
        </div>
    );
};

export default Genre;
