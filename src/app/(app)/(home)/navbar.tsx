"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import NabarSidebar from "./navbar-sidebar";
import { navbarItems } from "@/lib/constants";
import NavbarItem from "./navbar-item";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});


const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="h-20 flex border border-b justify-between font-medium bg-white pl-5">
      <Link href={"/"} className="pl-6 flex items-center">
        <span className={`${poppins.className} text-5xl font-semibold`}>
          bunroad
        </span>
      </Link>

      <div className="items-center justify-center gap-2 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            href={item.href}
            children={item.children}
            key={item.href}
            isActive={item.href === pathname}
          />
        ))}
      </div>

      <div className="items-center hidden lg:flex">
        <Button
          variant={"reverse"}
          className="h-full px-12 border-l border-t-0 border-b-0 border-r-0 outline-none rounded-none transition-colors text-lg"
        >
          Login
        </Button>
        <Button
          variant={"reverse"}
          className="h-full px-12 border-l border-t-0 border-b-0 border-r-0 outline-none rounded-none transition-colors text-lg bg-black text-white"
        >
          SignUp
        </Button>
      </div>

      <div className="flex lg:hidden items-center">
        <NabarSidebar />
      </div>
    </nav>
  );
};

export default Navbar;
