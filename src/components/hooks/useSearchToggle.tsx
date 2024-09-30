'use client'

import { useEffect, useState, Dispatch, SetStateAction } from "react";

const useSearchToggle = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [searchToggle, setSearchToggle] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const toggleHeight = 50;
            if (window.scrollY > toggleHeight) {
                setSearchToggle(true);
            } else {
                setSearchToggle(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return [searchToggle, setSearchToggle];
};

export default useSearchToggle;
