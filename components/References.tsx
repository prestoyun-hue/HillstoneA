import React from 'react';

const CLIENTS = [
  { name: 'KINX', logo: 'https://placehold.co/200x80/ffffff/475569?text=KINX' },
  { name: 'CELL BIOTECH', logo: 'https://placehold.co/200x80/ffffff/475569?text=CELL+BIOTECH' },
  { name: 'IBNI', logo: 'https://placehold.co/200x80/ffffff/475569?text=IBNI' },
  { name: 'PRIMAX', logo: 'https://placehold.co/200x80/ffffff/475569?text=PRIMAX' },
  { name: 'SEOJIN SYSTEM', logo: 'https://placehold.co/200x80/ffffff/475569?text=SEOJIN+SYSTEM' },
  { name: 'UNIL', logo: 'https://placehold.co/200x80/ffffff/475569?text=UNIL' },
  { name: 'SAE-A', logo: 'https://placehold.co/200x80/ffffff/475569?text=SAE-A' },
  { name: 'T&R Biofab', logo: 'https://placehold.co/200x80/ffffff/475569?text=T%26R+Biofab' },
  { name: 'DAS', logo: 'https://placehold.co/200x80/ffffff/475569?text=DAS' },
  { name: 'SPACELINK', logo: 'https://placehold.co/200x80/ffffff/475569?text=SPACELINK' },
];

const References: React.FC = () => {
  return (
    <section id="references" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            주요 구축 사례
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            다양한 산업군의 선도 기업들이 Hillstone Networks의 보안 솔루션을 신뢰하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {CLIENTS.map((client) => (
            <div 
              key={client.name} 
              className="col-span-1 flex justify-center items-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
            >
              <img
                className="max-h-12 w-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                src={client.logo}
                alt={client.name}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
                * 이 외에도 공공, 금융, 제조 등 다수의 레퍼런스를 보유하고 있습니다.
            </p>
        </div>
      </div>
    </section>
  );
};

export default References;