import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Server, Users, Activity, Lock, Target, X, ZoomIn } from 'lucide-react';

interface PricingProps {
  onOpenModal: (product: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-hillstone-50 border border-hillstone-200 text-hillstone-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            Models & Pricing
          </span>
          <h2 className="text-4xl font-black text-hillstone-900 sm:text-5xl md:text-6xl tracking-tight mb-6 drop-shadow-sm">
            모델별 스펙 및 가격
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-hillstone-600 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 font-light">
            귀사의 비즈니스 규모에 맞는 <span className="text-hillstone-800 font-bold">최적의 고성능 보안 장비</span>를 선택하세요.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className={`relative flex flex-col p-6 bg-white rounded-2xl shadow-xl transition-transform hover:-translate-y-2 border ${product.isRecommended ? 'border-2 border-cyan-500 ring-4 ring-cyan-500/10' : 'border-gray-100'}`}
            >
              {product.isRecommended && (
                <div className="absolute top-0 right-0 -mt-3 mr-3 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xs font-bold text-white uppercase tracking-wide shadow-md z-10">
                   Best Choice
                </div>
              )}
              
              <div className="mb-4">
                <h3 className="text-xl font-black text-hillstone-900">{product.name}</h3>
              </div>

              {/* Product Image Area */}
              <div 
                className="mb-6 bg-slate-50 rounded-lg p-4 flex items-center justify-center h-40 border border-slate-100 group-hover:border-hillstone-100 transition-colors cursor-zoom-in relative group/image"
                onClick={() => setPreviewImage(product.image)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity bg-black/5 rounded-lg">
                  <ZoomIn className="w-8 h-8 text-hillstone-600 opacity-75" />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-2">
                   <span className="text-sm font-medium text-gray-400 line-through decoration-gray-400">₩{product.originalPrice}</span>
                   <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                     SALE
                   </span>
                </div>
                <div className="flex items-baseline mt-1">
                   <span className="text-3xl font-extrabold text-hillstone-900" id={product.priceId}>₩{product.price}</span>
                </div>
              </div>
              
              <div className="flex-1">
                 <p className="text-sm text-gray-600 mb-6 min-h-[40px]">{product.description}</p>

                 {/* Tech Specs Section */}
                 <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-3 border border-slate-100">
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 flex items-center"><Server className="w-3 h-3 mr-1"/>장비 크기</span>
                        <span className="font-semibold text-slate-800 text-right">{product.formFactor}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 flex items-center"><Activity className="w-3 h-3 mr-1"/>장비 성능</span>
                        <span className="font-semibold text-slate-800 text-right">{product.fwThroughput}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 flex items-center"><Users className="w-3 h-3 mr-1"/>세션</span>
                        <span className="font-semibold text-slate-800 text-right">{product.concurrentSessions}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 flex items-center"><Users className="w-3 h-3 mr-1"/>신규 세션</span>
                        <span className="font-semibold text-slate-800 text-right">{product.newSessions}</span>
                    </div>
                     <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 flex items-center"><Lock className="w-3 h-3 mr-1"/>Free SSLVPN</span>
                        <span className="font-semibold text-blue-600 text-right">{product.sslVpnUsers}</span>
                    </div>
                     <div className="flex justify-between items-start text-xs pt-1 border-t border-slate-200 mt-2">
                        <span className="text-gray-500 flex items-center mt-0.5"><Target className="w-3 h-3 mr-1"/>타겟</span>
                        <span className="font-bold text-hillstone-700 text-right max-w-[60%] leading-tight">{product.target}</span>
                    </div>
                 </div>
              </div>

              <button
                onClick={() => onOpenModal(product.name)}
                className={`w-full py-3 px-4 rounded-xl shadow-sm text-sm font-bold transition-all ${
                  product.isRecommended 
                    ? 'bg-hillstone-900 text-white hover:bg-hillstone-800 hover:shadow-lg' 
                    : 'bg-white text-hillstone-700 hover:bg-gray-50 border border-gray-200 hover:border-hillstone-300'
                }`}
              >
                구매 문의하기
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setPreviewImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img 
            src={previewImage} 
            alt="Product Detail" 
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl scale-100 animate-in zoom-in-95 duration-200 bg-white"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Pricing;