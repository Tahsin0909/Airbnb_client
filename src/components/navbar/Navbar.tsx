/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import logo from '../../public/images/logo .png'
import Link from 'next/link';
import Search from './search/Search';
import Profile from './profile/Profile';




const Navbar = () => {
    return (

        <div className='flex items-center justify-between h-[80px] w-full'>
            <Link href={'/'} className=''>
                <Image width={118} height={64} src={logo} alt='airbnb Logo' />
            </Link>
            <Search />
            <Profile />
        </div>

    );
};

export default Navbar;