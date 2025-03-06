import { ReactNode } from 'react';

interface ContentGridProps {
    children: ReactNode;
    loading: boolean;
    error: string | null;
}


const ContentGrid = ({ children, loading, error }: ContentGridProps) => {

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
                Loading...
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
                {error}
            </div>
        )
    }


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-auto gap-4 p-4 container mx-auto">
            {children}
        </div>
    )
}

export default ContentGrid;