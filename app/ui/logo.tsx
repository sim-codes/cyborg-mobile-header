import Image from 'next/image';
import mobilelogo from '@/public/mobilelogo.svg';
import desktoplogo from '@/public/desktoplogo.svg';

export default function Logo() {
    return (
    <div className="flex items-center justify-center">
        <Image src={mobilelogo} alt='logo' className='block md:hidden' width="14" height="16" />
        <Image src={desktoplogo} alt='logo' className='hidden md:block md:w-32 lg:w-full' width="160" height="40" />
    </div>
    );
}