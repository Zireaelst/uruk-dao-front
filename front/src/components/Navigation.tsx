// NavBar component for the URUK application

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavigationProps } from "../types";
import { useState, useEffect } from "react";

export default function Navigation({ active, setActive }: NavigationProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Scroll efekti için event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-800 dark:text-white transition-transform hover:scale-105"
              onClick={() => setActive("home")}
            >
              <Image
                src="/images/uruk-logo.png"
                alt="URUK Logo"
                width={40}
                height={40}
                className="rounded-full border-2 border-transparent hover:border-indigo-500 transition-all"
              />
            </Link>
          </div>
          
          {/* Butonları ortaya hizalıyorum */}
          <div className="hidden sm:flex flex-1 items-center justify-center space-x-3">
            <Link
              href="/"
              className={`nav-button font-bold ${
                active === "home" || pathname === "/"
                  ? "active-nav-button"
                  : ""
              }`}
              onClick={() => setActive("home")}
            >
              Home
            </Link>
            <Link
              href="/community"
              className={`nav-button font-bold ${
                active === "community" || pathname === "/community"
                  ? "active-nav-button"
                  : ""
              }`}
              onClick={() => setActive("community")}
            >
              Community
            </Link>
            <Link
              href="/feed"
              className={`nav-button font-bold ${
                active === "feed" || pathname === "/feed"
                  ? "active-nav-button"
                  : ""
              }`}
              onClick={() => setActive("feed")}
            >
              Feed
            </Link>
            <Link
              href="/profile"
              className={`nav-button font-bold ${
                active === "profile" || pathname === "/profile"
                  ? "active-nav-button"
                  : ""
              }`}
              onClick={() => setActive("profile")}
            >
              Profile
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu");
                mobileMenu?.classList.toggle("hidden");
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden sm:flex items-center">
            <ConnectButton />
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className="sm:hidden hidden transition-all duration-300" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
          <Link
            href="/"
            className={`${
              active === "home" || pathname === "/"
                ? "bg-indigo-50 border-indigo-500 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300"
                : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:text-white"
            } block pl-3 pr-4 py-2 border-l-4 text-base font-bold`}
            onClick={() => {
              setActive("home");
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
          >
            Home
          </Link>
          <Link
            href="/community"
            className={`${
              active === "community" || pathname === "/community"
                ? "bg-indigo-50 border-indigo-500 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300"
                : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:text-white"
            } block pl-3 pr-4 py-2 border-l-4 text-base font-bold`}
            onClick={() => {
              setActive("community");
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
          >
            Community
          </Link>
          <Link
            href="/feed"
            className={`${
              active === "feed" || pathname === "/feed"
                ? "bg-indigo-50 border-indigo-500 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300"
                : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:text-white"
            } block pl-3 pr-4 py-2 border-l-4 text-base font-bold`}
            onClick={() => {
              setActive("feed");
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
          >
            Feed
          </Link>
          <Link
            href="/profile"
            className={`${
              active === "profile" || pathname === "/profile"
                ? "bg-indigo-50 border-indigo-500 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300"
                : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:text-white"
            } block pl-3 pr-4 py-2 border-l-4 text-base font-bold`}
            onClick={() => {
              setActive("profile");
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
          >
            Profile
          </Link>
          <div className="px-3 pt-4 pb-2">
            <ConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
