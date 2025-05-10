import { useEffect } from "react";
import { NavigationProps } from '../types';
import { useRouter } from "next/navigation";
import PermanentScienceSection from "./PermanentScienceSection";

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
    <div className="relative">
      {/* Burada artık kendi arka plan resmini eklemeye gerek yok, 
          çünkü global Background.tsx bileşenimiz zaten arka planı sağlıyor */}
      
      {/* Hero section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* Metin için text-shadow ekliyorum ve rengi koyu yapıyorum */}
        <h1 className="text-6xl font-bold text-black mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          Welcome to URUK
        </h1>
        
        {/* Metin alanının okunabilirliğini artırmak için bir backdrop ve koyu metin rengi kullanıyorum */}
        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl max-w-2xl mb-12">
          <p className="text-xl text-black font-medium">
            Join our decentralized social platform where community and creativity thrive.
            Connect with like-minded individuals and share your ideas in a secure environment.
          </p>
        </div>
        
        <div className="space-x-4">
          <button
            onClick={() => handleNavigate('community')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
          >
            Join Community
          </button>
          <button
            onClick={() => handleNavigate('feed')}
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
          >
            Explore Feed
          </button>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-6 h-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      
      {/* Permanent Science section */}
      <PermanentScienceSection />
    </div> 
    );
};

export default Home;