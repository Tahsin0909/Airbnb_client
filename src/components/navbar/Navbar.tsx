/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import logo from '../../public/images/logo .png'
import Link from 'next/link';
import Search from './search/Search';
import Profile from './profile/Profile';




const Navbar = () => {
    return (
        <div className='relative max-w-screen-xl mx-auto '>
            <div className='w-full fixed top-0 left-0 right-0 max-w-screen-xl mx-auto px-4 bg-white z-10 border-b'>
                <div className='flex flex-col items-center'>
                    <div className='flex items-center justify-between w-full h-[80px]'>
                        <Link href={'/'} className=''>
                            <Image width={118} height={64} src={logo} alt='airbnb Logo' />
                        </Link>
                        <div className='flex items-center gap-8 justify-center'>
                            <p className="font-semibold text-lg">Stay</p>
                            <p className="hover:font-semibold text-lg ">Experience</p>
                        </div>
                        <Profile />
                    </div>
                    <div>
                        <Search />
                    </div>
                </div>
            </div>

        </div>



    );
};

export default Navbar;