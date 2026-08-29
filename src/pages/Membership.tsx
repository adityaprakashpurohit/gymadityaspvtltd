import { memberships } from '../data/mockData';
import { Button } from '../components/Button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="text-center py-16 px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-display uppercase font-bold text-white mb-6">Join The Forge</h1>
        <p className="text-gray-400 font-body max-w-2xl mx-auto text-lg">
          No hidden fees. No long-term contracts. Just raw training and results. Choose the tier that fits your commitment level.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {memberships.map((tier) => (
            <div 
              key={tier.tier} 
              className={`bg-brand-charcoal border p-8 relative ${tier.popular ? 'border-brand-accent transform md:-translate-y-4' : 'border-white/10'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-brand-black px-4 py-1 text-xs font-display uppercase font-bold tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-3xl font-display uppercase font-bold text-white mb-2">{tier.tier}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-display font-bold text-brand-accent">{tier.price}</span>
                <span className="text-gray-400 font-body ml-2">{tier.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-accent mr-3 shrink-0" />
                    <span className="text-gray-300 font-body text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/free-trial" className="block">
                <Button variant={tier.popular ? 'primary' : 'outline'} className="w-full">
                  Select Plan
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
