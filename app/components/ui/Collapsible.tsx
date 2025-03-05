'use client';

import { useState, useEffect } from 'react';

interface CollapsibleProps {
    open?: boolean;
    title: string;
    children: React.ReactNode;
    className?: string;
};

const Collapsible = ({ open = true, title, children, className }: CollapsibleProps) => {
    const [isOpen, setIsOpen] = useState(open);
    const [isAnimationDone, setIsAnimationDone] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleTransitionEnd = () => {
        setIsAnimationDone(true);
    };

    useEffect(() => {
        // Reset the animation state before the next transition
        setIsAnimationDone(false);
    }, [isOpen]);

    return (
        <div className={`${className}`}>
            <button
                className={`flex justify-between w-full p-4 text-lg font-semibold bg-secondarydark ${isAnimationDone && !isOpen ? 'rounded-b-xl' : ''} rounded-t-xl`}
                onClick={toggleOpen}
            >
                <h2 className="p-2 font-bold text-xl italic">{title}</h2>
                <span>{isOpen ? '▲' : '▼'}</span>
            </button>
            <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1500px]' : 'max-h-0'}`}
                onTransitionEnd={handleTransitionEnd}
            >
                <div className='p-2 bg-secondarydark rounded-b-xl'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Collapsible;
