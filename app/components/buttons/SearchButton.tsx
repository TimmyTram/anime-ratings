'use client';

import SearchIcon from "../icons/Search.icon";
import { useRouter, usePathname } from "next/navigation";

const SearchButton = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname !== "/search") router.push('/search');
    }

    return (
        <div onClick={handleClick} className="flex items-center text-white cursor-pointer group">
            <SearchIcon size={32} className="fill-primary group-hover:fill-white" />
        </div>
    );
};

export default SearchButton;
