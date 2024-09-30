'use client'

import { useEffect, useState } from "react";


const useSearchToggle = () => {

    const [searchToggle, setSearchToggle] = useState(false)


    useEffect(() => {
        console.log(window.scrollY);
        const handleScroll = () => {
            const toggleHeight = 50;
            if (window.scrollY > toggleHeight) {
                setSearchToggle(true);
            } else if (window.scrollY <= toggleHeight) {
                setSearchToggle(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

  return [searchToggle] ;
};

export default useSearchToggle;
