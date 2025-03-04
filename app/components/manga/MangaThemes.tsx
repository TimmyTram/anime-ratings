import type { MangaThemes } from "@/app/types/MangaData"

interface MangaThemesProps {
    themes: MangaThemes[] | undefined;
}

const MangaThemes = ({ themes }: MangaThemesProps) => {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:gap-4">
            <h2 className="text-xl font-bold flex items-center justify-center">Themes:</h2>
            {themes && themes.map((theme) => (
                <span
                    key={theme.mal_id}
                    className="font-bold bg-purplegrad px-4 py-2 shadow-md rounded-full"
                >
                    {theme.name}
                </span>
            ))}
        </div>
    );
};

export default MangaThemes;