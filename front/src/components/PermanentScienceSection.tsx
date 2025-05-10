import React from 'react';
import { useRouter } from 'next/navigation';

const PermanentScienceSection = () => {
  const router = useRouter();
  
  // Örnek "explore" fonksiyonu - ileride farklı sayfalara yönlendirebilir
  const handleExplore = (path: string) => {
    router.push(path);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Renkli arkaplan elementleri */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-8 -right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-8 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]">
            Permanent Science
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto font-medium">
            Discover innovative ways to fund, collaborate, and preserve scientific knowledge 
            through decentralized technologies.
          </p>
        </div>
        
        {/* Kart grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Fund your project card */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-400 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-black">Fund Your Project</h3>
            <p className="text-black/80 mb-6">
              Secure transparent funding for your research directly from supporters. 
              No intermediaries, lower fees, instant global reach.
            </p>
            
            <ul className="mb-8 text-black/70 space-y-1">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Transparent fund allocation
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Direct community engagement
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Milestone-based releases
              </li>
            </ul>
            
            <button 
              onClick={() => handleExplore('/fund-project')} 
              className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition-all focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Start Funding
            </button>
          </div>
          
          {/* Fund your paper card */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-black">Fund Your Paper</h3>
            <p className="text-black/80 mb-6">
              Create, publish, and monetize peer-reviewed papers without traditional publishing restrictions.
            </p>
            
            <ul className="mb-8 text-black/70 space-y-1">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Permanent availability
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Verifiable peer reviews
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Fair citation rewards
              </li>
            </ul>
            
            <button 
              onClick={() => handleExplore('/fund-paper')} 
              className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-all focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Publish Paper
            </button>
          </div>
          
          {/* Decentralized research */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-black">Decentralized Research</h3>
            <p className="text-black/80 mb-6">
              Collaborate with researchers globally using decentralized tools for data sharing and analysis.
            </p>
            
            <ul className="mb-8 text-black/70 space-y-1">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Secure data sharing
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Global collaboration tools
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Immutable research records
              </li>
            </ul>
            
            <button 
              onClick={() => handleExplore('/decentralized-research')} 
              className="w-full py-2 px-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 transition-all focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
            >
              Start Collaborating
            </button>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20 mb-6">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium text-black">Open for all researchers</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Ready to transform how science works?</h3>
          <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
            Join a growing community of researchers, institutions, and funders building the future of open science.
          </p>
          
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white text-lg font-bold rounded-lg hover:shadow-lg transform transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Join the Scientific Revolution
          </button>
        </div>
      </div>
    </section>
  );
};

export default PermanentScienceSection;