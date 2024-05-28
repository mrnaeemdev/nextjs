'use client'
import React from "react";
import './style.css'
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "login", href: "/login" },
  { name: "register", href: "/register" },
];

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname()
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href)
        return(
          <Link href={link.href} key={link.name} className={isActive ? "font-bold mr-4":"text-blue-500 mr-4"}>
          {link.name}
        </Link>
        )
      })}
      {children}
    </div>
  );
};

export default AuthLayout;
