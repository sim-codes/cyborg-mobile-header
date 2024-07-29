import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function DesktopNav(){
    return (
        <>
            <div className="hidden md:flex justify-between items-center gap-3 lg:gap-12 lg:text-lg md:text-sm">
                <Link href='/' className="hover:text-[#F97316]">Home</Link>
                <Link href='#' className="hover:text-[#F97316]">Pricing</Link>
                <Link href='#' className="hover:text-[#F97316] flex items-center lg:gap-2">
                Products
                <ChevronDown size={16} />
                </Link>
                <Link href='#' className="hover:text-[#F97316]">Resources</Link>
                <Link href='#' className="hover:text-[#F97316]">Contact Us</Link>
            </div>

            <div className="hidden md:flex md:gap-2 lg:gap-5 lg:text-lg md:text-sm">
                <button className='p-3 md:w-[80px] lg:w-[100px] rounded-lg border border-[#F97316] text-[#F97316]'>Login</button>
                <button className='p-3 md:w-[100px] lg:w-[135px] rounded-lg bg-[#F97316] text-white'>Get started</button>
            </div>
        </>
    )
}