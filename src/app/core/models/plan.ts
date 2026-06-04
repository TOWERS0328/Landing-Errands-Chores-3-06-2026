export interface Plan {
    id: string;
    name: string;
    price: number;          // 0 = Free
    period: 'mo' | 'free';
    description: string;
    features: string[];
    isPopular: boolean;
    ctaLabel: string;
  }