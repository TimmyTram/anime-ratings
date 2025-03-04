import { MangaData } from '../../types/MangaData';
import ClickableCard from '../shared/ClickableCard';
import Card from '../shared/Card';

type MangaCardProps = {
    manga: MangaData;
}

const MangaCard = ({ manga }: MangaCardProps) => {
    return (
        <ClickableCard data={manga} >
            <Card 
                imageSrc={manga.images.jpg.large_image_url}
                title={manga.title}
                releaseDate={manga.published?.string ?? "N/A"}
                synopsis={manga.synopsis}
                altText={manga.title}
            />
        </ClickableCard>
    );
};

export default MangaCard;