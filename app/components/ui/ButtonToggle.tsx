import { motion } from 'framer-motion';

interface ButtonToggleProps {
    isManga: boolean;
    onToggle: () => void;
}

const ButtonToggle: React.FC<ButtonToggleProps> = ({ isManga, onToggle }) => {
    return (
        <div className="py-4">
            <div
                className="relative w-64 h-12 bg-secondarydark rounded-full flex items-center cursor-pointer shadow-md outline outline-4 outline-offset-2 outline-primary"
                onClick={onToggle}
            >
                <motion.div
                    className="absolute w-1/2 h-full bg-primary rounded-full"
                    initial={{ x: isManga ? '100%' : '0%' }}
                    animate={{ x: isManga ? '100%' : '0%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
                <div className={`w-1/2 text-center z-10 text-sm font-bold ${!isManga ? 'text-white' : 'text-gray-500'}`}>
                    Anime
                </div>
                <div className={`w-1/2 text-center z-10 text-sm font-bold ${isManga ? 'text-white' : 'text-gray-500'}`}>
                    Manga
                </div>
            </div>
        </div>
    );
};

export default ButtonToggle;
