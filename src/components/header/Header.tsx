'use client'

import BlankComponents from "../blankComponents/BlankComponents";
import Navbar from "../navbar/Navbar";
import CategoryBox from "./categoryBox/CategoryBox";

const Header = () => {
    return (
        <div className="w-full fixed top-0 left-0 right-0 z-20 shadow-md transition-all">
            <Navbar />
            <BlankComponents />
            <div className="  max-w-screen-xl mx-auto h-full grid grid-cols-6">
                <div className="col-span-4">
                    <CategoryBox />

                </div>
                <div className="col-span-1">

                </div>
                <div className="col-span-1">

                </div>
            </div>
        </div>
    );
};

export default Header;