const HomeIcon = ({ size, className }: IconProps) => {
    return (
        <svg
            className={`${className} transition-colors duration-300`}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/>
        </svg>
    );
};

export default HomeIcon;
