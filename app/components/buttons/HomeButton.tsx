'use client';

import HomeIcon from "../icons/Home.icon";
import { useRouter, usePathname } from "next/navigation";

const HomeButton = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname !== "/") router.push('/');
    }

    return (
        <div onClick={handleClick} className="flex items-center text-white cursor-pointer group">
            <HomeIcon size={32} className="fill-white group-hover:fill-gray-500" />
        </div>
    );
};

export default HomeButton;