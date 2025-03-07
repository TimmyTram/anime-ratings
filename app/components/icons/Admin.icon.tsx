const AdminIcon = ({ size, color, className }: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            fill={color}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M6.272,22.414l4.2-4.2.929.93a1,1,0,1,0,1.414-1.414l-.774-.775,8.8-5.869a1,1,0,0,0,.445-.832V3.707a1,1,0,0,0-1-1H13.747a1,1,0,0,0-.832.445l-5.869,8.8-.774-.774A1,1,0,1,0,4.858,12.6l.93.93-4.2,4.2a1,1,0,0,0,0,1.414l3.272,3.272A1,1,0,0,0,6.272,22.414Zm8.01-17.707h5.011v5.01L10.6,15.511c-.1-.1-2.25-2.25-2.113-2.113ZM7.2,14.94,9.06,16.8l-3.495,3.5L3.707,18.435Z"></path>
            </g>
        </svg>
    );
};

export default AdminIcon;