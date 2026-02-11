import { ProductSpec } from './types';

export const PRODUCTS: ProductSpec[] = [
  {
    id: 'a200',
    name: 'SG-6000-A200',
    image: 'http://www.estc.co.kr/event/images/H_A200.png',
    formFactor: 'Desktop',
    fwThroughput: '1 Gbps',
    concurrentSessions: '300,000',
    newSessions: '15,000',
    sslVpnUsers: '50User',
    target: '소규모 지사/SOHO 10-20명',
    priceId: 'price-a200',
    originalPrice: '1,760,000',
    price: '858,000',
    description: '소규모 네트워크를 위한 완벽한 시작',
    features: ['팬리스 디자인', '컴팩트 사이즈', '저전력 설계', '데스크탑 폼팩터'],
  },
  {
    id: 'a1000',
    name: 'SG-6000-A1000',
    image: 'http://www.estc.co.kr/event/images/H_A1000.png',
    formFactor: 'Desktop (High-end)',
    fwThroughput: '4 Gbps',
    concurrentSessions: '300,000',
    newSessions: '48,000',
    sslVpnUsers: '50User',
    target: '중소기업 50명',
    priceId: 'price-a1000',
    originalPrice: '2,464,000',
    price: '1,650,000',
    description: '성능과 비용의 최적 밸런스',
    features: ['8GB 온보드 스토리지', '대용량 로그 저장', '고속 처리 엔진', '확장된 포트 구성'],
  },
  {
    id: 'a1100',
    name: 'SG-6000-A1100',
    image: 'http://www.estc.co.kr/event/images/H_A1100.png',
    formFactor: 'Desktop (High-end)',
    fwThroughput: '5 Gbps',
    concurrentSessions: '300,000',
    newSessions: '48,000',
    sslVpnUsers: '80User',
    target: '중소기업 50명',
    priceId: 'price-a1100',
    originalPrice: '3,190,000',
    price: '2,090,000',
    description: '더 강력해진 데스크탑 방화벽',
    features: ['향상된 NGFW 처리량', '고속 인터페이스', '고성능 CPU 탑재', '유연한 정책 관리'],
  },
  {
    id: 'a2000',
    name: 'SG-6000-A2000-AD',
    image: 'http://www.estc.co.kr/event/images/H_A2000.png',
    badge: 'Advanced Defense Pack',
    formFactor: '1U Rackmount',
    fwThroughput: '5 Gbps',
    concurrentSessions: '1,000,000',
    newSessions: '48,000',
    sslVpnUsers: '150User',
    target: '중견기업 100명',
    priceId: 'price-a2000',
    originalPrice: '5,500,000',
    price: '3,630,000',
    description: '미션 크리티컬 환경을 위한 선택',
    features: ['IPS/AV/URL 필터링 포함', '1U 랙마운트 디자인', '높은 포트 밀도', '이중화 전원 지원(옵션)'],
    isRecommended: true,
  },
];

export const TRUST_BADGES = [
  {
    title: 'Gartner Visionary',
    desc: '기술적 비전을 인정받은 글로벌 리더',
    icon: 'eye'
  },
  {
    title: '100% 고객 추천율',
    desc: 'Gartner Peer Insights 기준 높은 만족도',
    icon: 'thumbsUp'
  },
  {
    title: 'Strong Performer',
    desc: '3년 연속 선정, 검증된 보안 성능',
    icon: 'award'
  }
];