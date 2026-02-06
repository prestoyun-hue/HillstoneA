import React from 'react';
import { PRODUCTS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  return (
    <section id="specs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            모델별 상세 스펙 비교
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            비즈니스 환경에 가장 적합한 모델을 찾아보세요.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 bg-slate-800 text-white font-semibold text-lg min-w-[150px] border-b border-slate-700">구분</th>
                  {PRODUCTS.map((product) => (
                    <th key={product.id} className={`p-6 text-center min-w-[180px] border-b ${product.id === 'a2000' ? 'bg-hillstone-50 border-hillstone-200' : 'bg-white border-gray-200'}`}>
                      <span className="block text-lg font-bold text-gray-900">{product.name}</span>
                      {product.badge && (
                        <span className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                          {product.badge}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 bg-gray-50 font-medium text-gray-700">장비 크기</td>
                  {PRODUCTS.map(p => (
                    <td key={`ff-${p.id}`} className="p-4 text-center text-gray-600">{p.formFactor}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 bg-gray-50 font-medium text-gray-700">장비 성능 (FW)</td>
                  {PRODUCTS.map(p => (
                    <td key={`fw-${p.id}`} className="p-4 text-center text-gray-900 font-semibold">{p.fwThroughput}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 bg-gray-50 font-medium text-gray-700">세션 (Concurrent)</td>
                  {PRODUCTS.map(p => (
                    <td key={`session-${p.id}`} className="p-4 text-center text-gray-600">{p.concurrentSessions}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 bg-gray-50 font-medium text-gray-700">신규 세션 (New)</td>
                  {PRODUCTS.map(p => (
                    <td key={`newsession-${p.id}`} className="p-4 text-center text-gray-600">{p.newSessions}</td>
                  ))}
                </tr>
                 <tr>
                  <td className="p-4 bg-gray-50 font-medium text-gray-700">Free SSLVPN</td>
                  {PRODUCTS.map(p => (
                    <td key={`sslvpn-${p.id}`} className="p-4 text-center text-blue-600 font-medium">{p.sslVpnUsers}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 bg-gray-50 font-medium text-gray-700">주요 타겟</td>
                  {PRODUCTS.map(p => (
                    <td key={`target-${p.id}`} className="p-4 text-center text-sm text-hillstone-700 font-medium">{p.target}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 bg-gray-50 font-medium text-gray-700">특징</td>
                   {PRODUCTS.map(p => (
                    <td key={`feat-${p.id}`} className="p-4 text-left align-top">
                        <ul className="space-y-1">
                             {p.features.slice(0, 2).map((feat, i) => (
                                 <li key={i} className="flex items-start text-xs text-gray-500">
                                     <CheckCircle2 className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                                     {feat}
                                 </li>
                             ))}
                        </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-400 text-right">* 성능 수치는 StoneOS 버전 및 환경에 따라 상이할 수 있습니다.</p>
      </div>
    </section>
  );
};

export default ComparisonTable;