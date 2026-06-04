

import { Plan } from '../../core/models/plan';

export const PLANS: readonly Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'free',
    description: 'Perfect for getting started with basic task management.',
    features: [
      'Up to 10 active tasks',
      '2 custom themes',
      'Basic reminders',
      'Community support',
    ],
    isPopular: false,
    ctaLabel: 'Get Started Free',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 2.99,
    period: 'mo',
    description: 'Everything you need to stay on top of every errand.',
    features: [
      'Unlimited tasks',
      'All 5 themes unlocked',
      'Smart reminders & recurring tasks',
      'Priority support',
      'Cloud sync across devices',
      'Ad-free experience',
    ],
    isPopular: true,
    ctaLabel: 'Go Premium',
  },
] as const;