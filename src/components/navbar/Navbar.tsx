'use client'

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import logo from '../../public/images/logo .png'
import Link from 'next/link';
import Search from './search/Search';
import Profile from './profile/Profile';
import useSearchToggle from '../hooks/useSearchToggle';




const Navbar = () => {
    const [searchToggle, setSearchToggle] = useSearchToggle()
    console.log("Navbar rendered", searchToggle);

    return (
        <div className={`${searchToggle ? 'h-[100px]' : 'h-[180px]'} w-full fixed top-0 left-0 right-0 z-10 bg-white border-b-2 transition-all`}>
            <div className={` max-w-screen-xl mx-auto flex flex-col items-center transition-all ease-out`}>
                <div className='flex items-center justify-between w-full h-[100px]'>
                    <Link href={'/'}>
                        <Image width={118} height={64} src={logo} alt='airbnb Logo' />
                    </Link>
                    <div className={`${searchToggle ? '-translate-y-20' : ''} flex items-center gap-8 justify-center transition-all`}>
                        <p className="font-semibold cursor-pointer text-lg">Stay</p>
                        <p className="font-semibold cursor-pointer text-gray-600 hover:text-black text-lg ">Experience</p>
                    </div>
                    <Profile />
                </div>
                <div>
                    <Search searchToggle={searchToggle} setSearchToggle={setSearchToggle}/>
                </div>
            </div>
        </div>


    );
};

export default Navbar;