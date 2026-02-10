import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-hillstone-900 text-lg font-bold mb-4">Hillstone Networks KOREA operated by ESTC</h3>
            <p className="text-sm text-gray-600 mb-4 max-w-sm">
              우리는 엔터프라이즈 보안 솔루션의 리더, Hillstone Networks의 공식 총판입니다. 
              최적의 보안 아키텍처 설계부터 기술 지원까지 함께합니다.
            </p>
          </div>
          
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-hillstone-900 text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-hillstone-600 mr-3 mt-0.5" />
                <span className="text-sm">서울시 송파구 송파대로 167, A동 521호 (문정역 테라타워1)</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-hillstone-600 mr-3" />
                <span className="text-sm">1899-8352</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-hillstone-600 mr-3" />
                <a href="mailto:sales@estc.co.kr" className="text-sm hover:text-hillstone-800 transition-colors">sales@estc.co.kr</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Hillstone Networks KOREA operated by ESTC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
