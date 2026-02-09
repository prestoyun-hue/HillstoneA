import React from 'react';

const References: React.FC = () => {
  return (
    <section id="references" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            주요 레퍼런스
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            다양한 분야의 고객들이 Hillstone Networks를 선택했습니다.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 flex items-center justify-center overflow-hidden">
             <img 
               src="https://file-s3.paas-ta.org/3642721f-8178-4a6c-9477-90c427301c27/2b17f54c-1e27-4a7b-8452-969435471d24/ef332f7a-297d-419a-992d-93721b5855e9.png" 
               alt="Customer References"
               className="max-w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500"
             />
        </div>
      </div>
    </section>
  );
};

export default References;