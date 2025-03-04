'use client';

import SearchIcon from '../icons/Search.icon';

interface SearchbarProps {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="p-16">
            <div className="flex flex-row w-full bg-secondary text-white border-4 border-white p-6 focus:outline-white rounded-full shadow-md placeholder-white">
                <input
                    type="text"
                    placeholder="Search for anime"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-secondary text-white placeholder-white outline-none"
                    autoComplete="off"
                />
                <SearchIcon size={24} className="ml-auto" />
            </div>
        </div>
    );
};

export default Searchbar;