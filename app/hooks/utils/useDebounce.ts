import { useState, useEffect } from "react";

// Custom hook to debounce a value
export function useDebounce<T>(value: T, delay = 300): T {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler); // Cleanup timeout on unmount/change
    }, [value, delay]);

    return debouncedValue;
}