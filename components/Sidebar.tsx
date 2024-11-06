"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconSun, 
  IconMoon,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";

// images
import Image1 from "@/components/images";

export function SidebarDemo() {
  const links = [
    {
      label: "New Chat",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex h-screen w-full max-w-7xl mx-auto bg-gray-100 dark:bg-neutral-800 overflow-hidden"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody
          className="justify-between gap-10 bg-white dark:bg-neutral-800" // Menambahkan perubahan warna di sini
        >
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <SidebarLink
              link={{
                label: "Naufal Milzam",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
            <SidebarLink
              link={{
                label: "Settings",
                href: "#",
                icon: (
                  <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              }}
            />
            <SidebarLink
              link={{
                label: "Logout",
                href: "#",
                icon: (
                  <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  
  return (
    <Link
      href="#"
      className="font-normal flex items-center justify-between text-sm text-black py-1 relative z-20 w-full"
    >
      <div className="flex items-center space-x-2">
        <Image1 />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-black dark:text-white whitespace-pre"
        >
          BMTI AI
        </motion.span>
      </div>

      <button onClick={toggleDarkMode} className="focus:outline-none">
        {darkMode ? (
          <IconMoon className="w-5 h-5 text-white" /> 
        ) : (
          <IconSun className="w-5 h-5 text-neutral-700" /> 
        )}
      </button>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image1 />
    </Link>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-1 h-full">
      <div className="bg-black dark:bg-neutral-900 flex flex-col flex-1 w-full h-full">
        <Hero />
      </div>
    </div>
  );
};

export default SidebarDemo;
