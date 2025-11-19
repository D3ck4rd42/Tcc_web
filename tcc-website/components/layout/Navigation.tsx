"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

export default function Navigation({ mobile, onItemClick }: NavigationProps) {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/facilities", label: "Installations" },
    { href: "/coaching", label: "Cours" },
    { href: "/pricing", label: "Tarifs" },
    { href: "/news", label: "Actualités" },
    { href: "/contact", label: "Contact" },
  ];

  const baseStyles = "transition-colors hover:text-blue-600";
  const activeStyles = "text-blue-600 font-semibold";
  const mobileStyles = "block py-2 px-4 hover:bg-gray-50";
  const desktopStyles = "px-3 py-2";

  return (
    <nav>
      <ul
        className={cn(
          mobile ? "flex flex-col space-y-1" : "flex items-center space-x-1"
        )}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  baseStyles,
                  mobile ? mobileStyles : desktopStyles,
                  isActive && activeStyles
                )}
                onClick={onItemClick}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
