export interface ProductSpec {
  id: string;
  name: string;
  image: string;
  badge?: string;
  formFactor: string;
  fwThroughput: string;
  concurrentSessions: string;
  newSessions: string;
  sslVpnUsers: string;
  target: string;
  priceId: string;
  originalPrice: string;
  price: string;
  description: string;
  features: string[];
  isRecommended?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  productInterest: string;
  message: string;
}