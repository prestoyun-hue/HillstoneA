import React from 'react';
import { ChevronRight, Shield, Zap, Settings, Coins } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-hillstone-900 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#grad1)" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'rgb(0,180,216)', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'rgb(0,40,85)', stopOpacity:1}} />
              </linearGradient>
            </defs>
         </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-hillstone-600 bg-hillstone-800/50 text-cyan-400 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              Gartner Visionary 선정
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">보안 그 이상의 가치</span>
              <span className="block text-cyan-400">Hillstone A-Series</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              AI 기반의 지능형 위협 탐지와 타협하지 않는 고성능 하드웨어 아키텍처. 
              합리적인 비용으로 엔터프라이즈급 보안을 경험하세요.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
               <ul className="space-y-3 mb-8 text-gray-300">
                  <li className="flex items-center"><Coins className="w-5 h-5 text-cyan-400 mr-2"/> 합리적 비용</li>
                  <li className="flex items-center"><Settings className="w-5 h-5 text-cyan-400 mr-2"/> 스마트하고 자동화된 정책 관리</li>
                  <li className="flex items-center"><Zap className="w-5 h-5 text-cyan-400 mr-2"/> 하드웨어 가속 엔진의 탁월한 가용성</li>
                  <li className="flex items-center"><Shield className="w-5 h-5 text-cyan-400 mr-2"/> AI 기반 위협 탐지 및 차단</li>
               </ul>
              <button
                onClick={scrollToPricing}
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm text-hillstone-900 bg-cyan-400 hover:bg-cyan-300 md:text-lg transition-all transform hover:scale-105"
              >
                모델 및 가격 보기
                <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 flex justify-center">
            {/* Server Rack Illustration */}
            <div className="relative mx-auto w-full rounded-lg shadow-2xl lg:max-w-md">
               <div className="relative block w-full bg-gradient-to-tr from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 aspect-[4/3] flex items-center justify-center group p-4">
                 <img 
                    src="https://www.hillstonenet.com/wp-content/uploads/logo-ICS-home-bnr3@2x.png" 
                    alt="Hillstone Security Solutions" 
                    className="absolute inset-0 w-full h-full object-contain p-2 transition-transform duration-500 hover:scale-105" 
                 />
                 
                 {/* Decorative elements representing ports/lights */}
                 <div className="absolute bottom-4 left-4 right-4 flex justify-between space-x-2">
                    {[1,2,3,4,5,6,7,8].map(i => (
                        <div key={i} className={`h-1.5 w-full rounded-sm ${i % 3 === 0 ? 'bg-green-500 animate-pulse' : 'bg-gray-600'}`}></div>
                    ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;