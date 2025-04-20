"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarItems } from "@/lib/constants";
import { Menu } from "lucide-react";
import NavbarItem from "./navbar-item";
import { usePathname } from "next/navigation";

const NabarSidebar = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <Button size={"icon"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        {navbarItems.map((item) => (
          <NavbarItem
            href={item.href}
            children={item.children}
            key={item.href}
            isActive={item.href === pathname}
          />
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default NabarSidebar;
