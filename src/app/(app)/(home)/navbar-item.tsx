import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarItemProps {
  isActive?: boolean;
  children: React.ReactNode;
  href: string;
}

const NavbarItem = ({ isActive, children, href }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant={"default"}
      className={cn(
        "px-3.5 rounded-full",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default NavbarItem;
