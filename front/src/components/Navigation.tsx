import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavigationProps } from "../types";

export default function Navigation({ active, setActive }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-xl font-bold text-gray-800 dark:text-white"
                onClick={() => setActive("home")}
              >
                <Image
                  src="/images/uruk-logo.png"
                  alt="URUK Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`${
                  active === "home" || pathname === "/"
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium dark:text-gray-100`}
                onClick={() => setActive("home")}
              >
                Home
              </Link>
              <Link
                href="/community"
                className={`${
                  active === "community" || pathname === "/community"
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium dark:text-gray-100`}
                onClick={() => setActive("community")}
              >
                Community
              </Link>
              <Link
                href="/feed"
                className={`${
                  active === "feed" || pathname === "/feed"
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium dark:text-gray-100`}
                onClick={() => setActive("feed")}
              >
                Feed
              </Link>
              <Link
                href="/profile"
                className={`${
                  active === "profile" || pathname === "/profile"
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium dark:text-gray-100`}
                onClick={() => setActive("profile")}
              >
                Profile
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <ConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
