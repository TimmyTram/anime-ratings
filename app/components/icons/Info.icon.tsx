const InfoIcon = ({ size, className, color }: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            fill={color}
            viewBox="0 0 448 448"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <title>status-info</title>
                <path
                    style={{ fillOpacity: 1 }}
                    d="M 224 0 A 224 224 0 0 0 0 224 A 224 224 0 0 0 224 448 A 224 224 0 0 0 448 224 A 224 224 0 0 0 224 0 z M 224 64 A 40 40.000015 0 0 1 264 104 A 40 40.000015 0 0 1 224 144 A 40 40.000015 0 0 1 184 104 A 40 40.000015 0 0 1 224 64 z M 192 192 L 256 192 L 256 384 L 192 384 L 192 192 z"
                ></path>
            </g>
        </svg>
    );
};

export default InfoIcon;
