'use client';

import { useRouter } from "next/navigation";

interface NavButtonProps {
    label: string;
    route: string;
    className?: string;
}

const NavButton = ({ label, route, className }: NavButtonProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(route);
    }

    return (
        <button 
            onClick={handleClick} 
            className={className}
        >
            {label}
        </button>
    );
}

export default NavButton;
