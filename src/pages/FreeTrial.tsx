import { useState } from 'react';
import { Button } from '../components/Button';
import { Check } from 'lucide-react';

const FreeTrial = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500); // simulate API call
  };

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4">
      <div className="text-center py-16 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-display uppercase font-bold text-brand-accent mb-6">Claim Your Free Pass</h1>
        <p className="text-gray-400 font-body max-w-2xl mx-auto text-lg">
          Experience Ironforge for 3 days. Full facility access, one complimentary class, zero commitment.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-brand-charcoal border border-white/10 p-8 md:p-12">
        {/* Left column: Benefits */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-display uppercase font-bold text-white mb-6">What's Included?</h3>
            <ul className="space-y-4">
              {[
                '3 Days Full Facility Access',
                '1 Free Group Class Pass',
                'Complimentary InBody Scan',
                'Goal Setting Session',
                'Locker & Towel Service'
              ].map((benefit, i) => (
                <li key={i} className="flex items-center">
                  <Check className="h-5 w-5 text-brand-accent mr-3 shrink-0" />
                  <span className="text-gray-300 font-body">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-sm text-gray-500 font-body italic">
              "The best gym I've ever trained at. The free trial proved they mean business."
              <br />- John D.
            </p>
          </div>
        </div>

        {/* Right column: Form */}
        <div>
          {status === 'success' ? (
            <div className="h-full flex flex-col justify-center text-center bg-brand-black/50 p-8 border border-brand-accent">
              <Check className="h-16 w-16 text-brand-accent mx-auto mb-6" />
              <h3 className="text-2xl font-display uppercase font-bold text-white mb-2">Pass Claimed!</h3>
              <p className="text-gray-400 font-body mb-8">
                Your 3-day pass has been sent to your email. Show it at the front desk to activate your trial.
              </p>
              <Button variant="outline" onClick={() => setStatus('idle')}>Start Over</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-display uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                <input type="text" required className="w-full bg-brand-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-accent font-body transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-display uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                <input type="email" required className="w-full bg-brand-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-accent font-body transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-display uppercase tracking-wider text-gray-400 mb-2">Phone Number</label>
                <input type="tel" required className="w-full bg-brand-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-accent font-body transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-display uppercase tracking-wider text-gray-400 mb-2">Main Goal</label>
                <select className="w-full bg-brand-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-accent font-body transition-colors appearance-none">
                  <option>Build Strength / Muscle</option>
                  <option>Lose Fat / Conditioning</option>
                  <option>Improve Athletic Performance</option>
                  <option>General Health & Fitness</option>
                </select>
              </div>
              <Button type="submit" variant="primary" className="w-full" disabled={status === 'loading'}>
                {status === 'loading' ? 'Processing...' : 'Claim Free Pass'}
              </Button>
              <p className="text-xs text-gray-500 font-body text-center mt-4">
                By submitting this form, you agree to our Terms of Service. Local residents only. First-time visitors only.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
