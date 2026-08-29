export const programs = [
  {
    id: 'strength',
    title: 'Pure Strength',
    description: 'Focus on compound lifts, progressive overload, and building raw power.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    duration: '60 min',
    difficulty: 'Advanced'
  },
  {
    id: 'hiit',
    title: 'Metabolic Conditioning',
    description: 'High-intensity interval training designed to shred fat and boost endurance.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop',
    duration: '45 min',
    difficulty: 'All Levels'
  },
];

export const trainers = [
  {
    id: 'marcus',
    name: 'Vikram Singh',
    specialty: 'Powerlifting / Strength',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'sarah',
    name: 'Priya Sharma',
    specialty: 'CrossFit / HIIT',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'david',
    name: 'Rahul Desai',
    specialty: 'Mobility / Calisthenics',
    image: 'https://images.unsplash.com/photo-1644329843477-80983cf4b162?q=80&w=2000&auto=format&fit=crop'
  }
];

export const memberships = [
  {
    tier: 'Basic',
    price: '₹2499',
    period: '/month',
    benefits: ['Full Gym Access', 'Locker Room Access', '1 Free PT Session']
  },
  {
    tier: 'Pro',
    price: '₹4499',
    period: '/month',
    benefits: ['Full Gym Access', 'All Classes Included', 'Guest Privileges', 'Sauna Access'],
    popular: true
  },
  {
    tier: 'Elite',
    price: '₹6999',
    period: '/month',
    benefits: ['Everything in Pro', 'Unlimited PT Sessions', 'Nutrition Plan', 'Recovery Room Access']
  }
];
