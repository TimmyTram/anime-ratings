import ContentGrid from './ContentGrid';
import AnimeCard from '../anime/AnimeCard';
import Pagination from '../pagination/Pagination';
import Searchbar from '../ui/Searchbar';
import useAnimeSearch from '../../hooks/jikan/useAnimeSearch';

const SearchResults = () => {
    const { searchTerm, setSearchTerm, animeList, currentPage, setCurrentPage, totalPages } = useAnimeSearch(8);

    return (
        <div>
            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ContentGrid loading={false} error={null}>
                {animeList && animeList.map((anime, index) => (
                    <AnimeCard key={index} anime={anime} />
                ))}
            </ContentGrid>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    );
};

export default SearchResults;