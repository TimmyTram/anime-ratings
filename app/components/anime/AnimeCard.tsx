import { AnimeData } from "../../types/AnimeData";
import ClickableCard from "../shared/ClickableCard";
import Card from "../shared/Card";

type AnimeCardProps = {
    anime: AnimeData;
}

const AnimeCard = ({ anime }: AnimeCardProps) => {
    return (
        <ClickableCard data={anime} >
            <Card 
                imageSrc={anime.images.jpg.large_image_url}
                title={anime.title}
                releaseDate={anime.year?.toString() ?? "N/A"}
                synopsis={anime.synopsis}
                altText={anime.title}
            />
        </ClickableCard>
    );
};

export default AnimeCard;