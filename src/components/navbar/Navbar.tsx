'use client'

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'; // Import Next.js optimized Image component
import logo from '../../public/images/logo .png'; // Import the logo image
import Link from 'next/link'; // Import Next.js Link component for navigation
import Search from './search/Search'; // Import Search component
import Profile from './profile/Profile'; // Import Profile component
import useSearchToggle from '../hooks/useSearchToggle'; // Custom hook to manage search toggle state

// Navbar component
const Navbar = () => {
    const [searchToggle, setSearchToggle] = useSearchToggle(); // Custom hook to get search toggle state and setter


    return (
        // Navbar container with dynamic height based on `searchToggle` state
        <div className={`${searchToggle ? 'h-[100px]' : 'h-[180px]'} w-full fixed top-0 left-0 right-0 z-10 bg-white border-b-2 transition-all`}>
            <div className={`max-w-screen-xl mx-auto flex flex-col items-center transition-all ease-out`}>
                
                {/* First row: Logo, Navigation items, and Profile */}
                <div className='flex items-center justify-between w-full h-[100px]'>
                    
                    {/* Logo linking back to the homepage */}
                    <Link href={'/'}>
                        <Image width={118} height={64} src={logo} alt='airbnb Logo' /> {/* Airbnb logo */}
                    </Link>
                    
                    {/* Navigation items with dynamic positioning based on `searchToggle` state */}
                    <div className={`${searchToggle ? '-translate-y-20' : ''} flex items-center gap-8 justify-center transition-all`}>
                        <p className="font-semibold cursor-pointer text-lg">Stay</p> {/* Stay navigation */}
                        <p className="font-semibold cursor-pointer text-gray-600 hover:text-black text-lg">Experience</p> {/* Experience navigation */}
                    </div>

                    {/* Profile section */}
                    <Profile />
                </div>

                {/* Second row: Search bar, passing toggle state to the Search component */}
                <div>
                    <Search searchToggle={searchToggle} setSearchToggle={setSearchToggle} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
