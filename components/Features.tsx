import React from 'react';
import { Eye, ThumbsUp, Award, Globe } from 'lucide-react';
import { TRUST_BADGES } from '../constants';

const Features: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'eye': return <Eye className="h-8 w-8 text-white" />;
      case 'thumbsUp': return <ThumbsUp className="h-8 w-8 text-white" />;
      case 'award': return <Award className="h-8 w-8 text-white" />;
      default: return <Globe className="h-8 w-8 text-white" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-hillstone-600 font-semibold tracking-wide uppercase">Why Hillstone?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            업계 최고의 가성비, 전 세계가 인정한 보안 기술력
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            글로벌 리서치 기관과 엔터프라이즈 고객이 증명한 Hillstone Networks의 가치를 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {TRUST_BADGES.map((badge, index) => (
            <div key={index} className="relative group bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-hillstone-200">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="inline-flex items-center justify-center p-3 bg-hillstone-600 rounded-xl shadow-lg group-hover:bg-hillstone-800 transition-colors">
                  {getIcon(badge.icon)}
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-hillstone-50 rounded-2xl p-8 lg:p-12 text-center border border-hillstone-100">
            <h3 className="text-2xl font-bold text-hillstone-900 mb-4">TCO 절감 효과</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                타사 대비 합리적인 도입 비용과 효율적인 유지보수 정책으로, 
                <span className="font-bold text-hillstone-700"> 총 소유 비용(TCO)을 획기적으로 절감</span>할 수 있습니다.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Features;