import React from 'react';

const Background = () => {
  return (
    <div
      className="fixed inset-0 z-[-1] w-full h-full"
      style={{
        backgroundImage: 'url("/images/uruk-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.9, // Opacity değerini artırıyorum
      }}
    >
      {/* Futuristik görünüm için gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,20,40,0.7)]"></div>
      
      {/* Parlak noktalar için overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-container"></div>
      </div>
    </div>
  );
};

export default Background;