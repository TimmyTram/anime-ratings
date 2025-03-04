const ChapterIcon = ({ size, className, color }: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            fill={color}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M0 0h48v48H0z" fill="none"></path>
                <g id="Shopicon">
                    <rect x="16.002" y="22.002" width="25.997" height="4"></rect>
                    <rect x="16.002" y="11.995" width="25.997" height="4"></rect>
                    <rect x="16.002" y="32.008" width="25.997" height="4"></rect>
                    <rect x="6" y="12" width="4" height="4"></rect>
                    <rect x="6" y="22.006" width="4" height="4"></rect>
                    <rect x="6" y="32.013" width="4" height="4"></rect>
                </g>
            </g>
        </svg>
    );
};

export default ChapterIcon;