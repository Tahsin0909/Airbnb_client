'use client'

import BlankComponents from "../blankComponents/BlankComponents";
import Navbar from "../navbar/Navbar";
import CategoryBox from "./categoryBox/CategoryBox";

const Header = () => {
    return (
        <div className="w-full fixed top-0 left-0 right-0 z-20 shadow-md transition-all">
            <Navbar />
            <BlankComponents />
            <div className="  max-w-screen-xl mx-auto h-full">
                <CategoryBox />
            </div>
        </div>
    );
};

export default Header;