import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" alt="Gym owner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase text-white mb-4">Our Story</h1>
          <p className="text-brand-accent tracking-widest uppercase font-body text-sm">Forged in Iron</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display uppercase font-bold text-white mb-6">Built for the dedicated.</h2>
            <p className="text-gray-400 font-body text-lg mb-6 leading-relaxed">
              Ironforge started with a simple belief: fitness shouldn't be soft. We grew tired of gyms that prioritized smoothie bars over squat racks. We wanted a place where the music was loud, the weights were heavy, and the community was serious about results.
            </p>
            <p className="text-gray-400 font-body text-lg mb-8 leading-relaxed">
              Since 2018, we have been the premier destination for powerlifters, athletes, and anyone willing to put in the work. No gimmicks. Just hard work and expert coaching.
            </p>
            <Button variant="primary">Join the Forge <ArrowRight className="ml-2 h-5 w-5" /></Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" alt="Weights" className="w-full h-64 object-cover rounded-sm" />
            <img src="https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&w=2071&auto=format&fit=crop" alt="Training" className="w-full h-64 object-cover rounded-sm mt-8" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-charcoal py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-display font-bold text-brand-accent mb-2">15k+</p>
            <p className="text-gray-400 uppercase tracking-wider text-sm font-body">Square Feet</p>
          </div>
          <div>
            <p className="text-5xl font-display font-bold text-brand-accent mb-2">24/7</p>
            <p className="text-gray-400 uppercase tracking-wider text-sm font-body">Access</p>
          </div>
          <div>
            <p className="text-5xl font-display font-bold text-brand-accent mb-2">12</p>
            <p className="text-gray-400 uppercase tracking-wider text-sm font-body">Elite Coaches</p>
          </div>
          <div>
            <p className="text-5xl font-display font-bold text-brand-accent mb-2">50+</p>
            <p className="text-gray-400 uppercase tracking-wider text-sm font-body">Weekly Classes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
