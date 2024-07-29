import Link from 'next/link';
import { X } from 'lucide-react';

type ModalProps = {
    open: boolean;
    onClose: () => void;
};

export default function MobileNav({ open, onClose }: ModalProps) {
  return (
    <div className={`fixed inset-0 flex justify-center items-center text-[#0E0E10]
    transition-colors ${open ? "visible bg-black/20" : "invisible"}
    `} onClick={onClose}>
        <div className={`absolute top-0 right-0 p-5 text-xl bg-[#F1F4F8] rounded-bl-3xl shadow-lg
        transition-all max-w-md w-[80vw] h-auto transform origin-top
        ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
        >
            <button className='text-2xl place-self-end w-full flex justify-end'
            onClick={onClose}>
                <X size={24} className='self-stretch' />
            </button>

            <div className="space-y-8 px-5">
                <Link href='/' className='block'>Home</Link>
                <Link href='#' className='block'>Pricing</Link>
                <Link href='#' className='block'>Products</Link>
                <Link href='#' className='block'>Resources</Link>
                <Link href='#' className='block'>Contact Us</Link>

                <div className="space-y-8 pb-10">
                    <button className='w-full p-3 rounded-lg border border-[#F97316] text-[#F97316]'>Login</button>
                    <button className='w-full p-3 rounded-lg bg-[#F97316] text-white'>Get started</button>
                </div>
            </div>

        </div>
    </div>
  );
}
