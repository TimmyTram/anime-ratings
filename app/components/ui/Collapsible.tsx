import { useState } from 'react';


interface CollapsibleProps {
    open?: boolean;
    title: string;
    children: React.ReactNode;
    className?: string;
    animationHeight?: number;
};

const Collapsible = ({ open = true, title, children, className }: CollapsibleProps) => {
    const [isOpen, setIsOpen] = useState(open);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`${className} bg-secondarydark rounded-xl`}>
                <button
                    className={`flex justify-between w-full p-4 text-lg font-semibold bg-secondarydark rounded-t-xl ${isOpen ? 'rounded-b-none' : 'rounded-b-xl'}`}
                    onClick={toggleOpen}
                >
                    <h2 className="p-2 font-bold text-xl italic">{title}</h2>
                    <span>{isOpen ? '▲' : '▼'}</span>
                </button>
                {/* max-h-[value] this must be changed if you w*/}
                <div
                    className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] rounded-b-xl' : 'max-h-0'}`}
                >
                    <div className='bg-secondarydark'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );

};

export default Collapsible;