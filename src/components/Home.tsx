import { useEffect } from "react";
import { NavigationProps } from '../types';
import Image from 'next/image';
import urukBg from '../assets/uruk-bg.png';
import { useRouter } from "next/navigation";

const Home = ({ setActive }: NavigationProps) => {
    const router = useRouter();

    useEffect(() => {
        setActive('home')
    }, [setActive])

    const handleNavigate = (page: string) => {
        setActive(page);
        router.push(`/${page}`);
    };

    return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={urukBg}
          alt="Uruk Background"
          fill
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">
          Welcome to URUK
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl">
          Join our decentralized social platform where community and creativity thrive.
          Connect with like-minded individuals and share your ideas in a secure environment.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => handleNavigate('community')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Join Community
          </button>
          <button
            onClick={() => handleNavigate('feed')}
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Explore Feed
          </button>
        </div>
      </div>
    </div> 
    );
};

export default Home;