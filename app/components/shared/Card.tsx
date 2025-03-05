import Image from "next/image";

type CardProps = {
    imageSrc: string;
    title: string;
    releaseDate: string;
    synopsis: string;
    altText: string;
};

const Card = ({ imageSrc, title, releaseDate, synopsis, altText }: CardProps) => {
    return (
        <div className="relative w-full cursor-pointer duration-300 ease-in-out group">
            <div className="relative h-[350px]">
                <Image 
                    src={imageSrc} 
                    alt={altText}
                    fill
                    className="object-cover rounded-xl"
                />
            </div>
            <div className="rounded-b-xl h-1/2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-85 p-4 opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="text-lg font-bold text-white truncate w-full text-shadow-md">{title}</div>
                <div className="text-sm text-gray-300">
                    Release Date: <span className="font-medium text-white">{releaseDate ?? "N/A"}</span>
                </div>
                <div className="text-sm text-gray-200 line-clamp-4 text-white">{synopsis}</div>
            </div>
        </div>
    );
    
    // return (
    //     <div className="relative w-full h-[600px] cursor-pointer duration-300 ease-in-out group">
    //         <div className="relative w-full h-full">
    //             <Image 
    //                 src={imageSrc} 
    //                 alt={altText}
    //                 fill
    //                 className="object-cover rounded-xl"
    //             />
    //         </div>
    //         {/* Content visibility and slide-up effect on hover */}
            // <div className="rounded-b-xl h-1/2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-85 p-4 opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            //     <div className="text-lg font-bold text-white truncate w-full text-shadow-md">{title}</div>
            //     <div className="text-sm text-gray-300">
            //         Release Date: <span className="font-medium text-white">{releaseDate ?? "N/A"}</span>
            //     </div>
            //     <div className="text-sm text-gray-200 line-clamp-6 text-white">{synopsis}</div>
            // </div>
        // </div>
    // );
};



export default Card;