import { useState } from 'react';
import { Button } from '../components/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500); // simulate API call
  };

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4">
      <div className="text-center py-16 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-display uppercase font-bold text-white mb-6">Contact Us</h1>
        <p className="text-gray-400 font-body max-w-2xl mx-auto text-lg">
          Got questions about our facility, personal training, or memberships? Drop us a line.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="bg-brand-charcoal p-10 border border-white/10">
            <h3 className="text-2xl font-display uppercase font-bold text-white mb-6">Ironforge HQ</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-brand-accent shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold font-body mb-1">Address</p>
                  <p className="text-gray-400 font-body text-sm">123 Fitness Avenue, Bandra West<br />Mumbai, MH 400050</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-brand-accent shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold font-body mb-1">Phone</p>
                  <p className="text-gray-400 font-body text-sm">+91 98765 43210</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-brand-accent shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold font-body mb-1">Email</p>
                  <p className="text-gray-400 font-body text-sm">hello@ironforge.in</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="bg-brand-charcoal p-10 border border-white/10">
          <h3 className="text-2xl font-display uppercase font-bold text-white mb-6">Send a Message</h3>
          
          {status === 'success' ? (
            <div className="bg-brand-accent/10 border border-brand-accent p-6 text-center">
              <p className="text-brand-accent font-body font-bold text-lg mb-2">Message Received!</p>
              <p className="text-gray-300 font-body text-sm">We'll get back to you within 24 hours.</p>
              <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>Send Another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-gray-400 mb-2">First Name</label>
                  <input type="text" required className="w-full bg-brand-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-accent font-body transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-gray-400 mb-2">Last Name</label>
                  <input type="text" required className="w-full bg-brand-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-accent font-body transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-display uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                <input type="email" required className="w-full bg-brand-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-accent font-body transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-display uppercase tracking-wider text-gray-400 mb-2">Message</label>
                <textarea rows={4} required className="w-full bg-brand-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-accent font-body transition-colors"></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
