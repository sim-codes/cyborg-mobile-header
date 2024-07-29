"use client";

import { useState } from "react";
import MobileNav from "@/app/ui/mobilenav";
import DesktopNav from "@/app/ui/desktopnav";
import { Menu } from 'lucide-react';

import Logo from './logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex justify-between bg-[#FFF] p-5 md:py-5 lg:px-14 md:px-5 gap-12">
      <Logo />

      {/* Desktop nav menu */}
      <DesktopNav />

      {/* Mobile menu */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-[#0E0E10] md:hidden">
        <Menu size={24} />
      </button>
      <MobileNav open={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </header>
  );
}