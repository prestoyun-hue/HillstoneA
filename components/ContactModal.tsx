import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, selectedProduct }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: selectedProduct,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setFormData(prev => ({ ...prev, productInterest: selectedProduct }));
    } else {
      document.body.style.overflow = 'unset';
      setIsSuccess(false);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, selectedProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // In a real app, send data to sales@estc.co.kr via backend API
      console.log('Form Submitted:', formData);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                구매 문의
              </h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                <X className="h-6 w-6" />
              </button>
            </div>

            {isSuccess ? (
              <div className="text-center py-10">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <Send className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">문의가 접수되었습니다.</h3>
                <p className="mt-2 text-sm text-gray-500">담당자가 확인 후 빠르게 연락드리겠습니다.</p>
                <button
                  onClick={onClose}
                  className="mt-6 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-hillstone-600 text-base font-medium text-white hover:bg-hillstone-800 focus:outline-none sm:text-sm"
                >
                  닫기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                   <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">성함 *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-hillstone-600 focus:border-hillstone-600 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">연락처 *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-hillstone-600 focus:border-hillstone-600 sm:text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일 *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-hillstone-600 focus:border-hillstone-600 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">회사명</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-hillstone-600 focus:border-hillstone-600 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700">관심 모델</label>
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-hillstone-600 focus:border-hillstone-600 sm:text-sm"
                  >
                    <option value="General">제품 전반 문의</option>
                    <option value="SG-6000-A200">SG-6000-A200</option>
                    <option value="SG-6000-A1000">SG-6000-A1000</option>
                    <option value="SG-6000-A1100">SG-6000-A1100</option>
                    <option value="SG-6000-A2000">SG-6000-A2000 (AD Pack)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">문의 내용</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-hillstone-600 focus:border-hillstone-600 sm:text-sm"
                    placeholder="궁금하신 점을 남겨주세요."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-hillstone-800 hover:bg-hillstone-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hillstone-600 disabled:opacity-50 transition-colors"
                  >
                    {isSubmitting ? '전송 중...' : '문의하기'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;