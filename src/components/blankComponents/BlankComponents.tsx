'use client'

import useSearchToggle from "../hooks/useSearchToggle";

const BlankComponents = () => {
    const [searchToggle] = useSearchToggle()

    return (
        <div className={`${searchToggle ? 'h-[100px]' : 'h-[180px]'} transition-all ease-out`}>
            
        </div>
    );
};

export default BlankComponents;