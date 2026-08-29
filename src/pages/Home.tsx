import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-brand-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in-up">
          <div className="max-w-3xl">
            <p className="text-brand-accent font-display tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
              Premium Fitness • Performance • Community
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-[0.9] mb-6 text-white">
              Build Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Strongest Self.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-body max-w-2xl mb-10 border-l-4 border-brand-accent pl-6 py-2">
              Train harder. Move better. Become stronger with expert coaching, world-class equipment, and a community built to push you forward.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/free-trial">
                <Button variant="primary" className="w-full sm:w-auto">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" className="w-full sm:w-auto">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section 
        className="py-32 relative bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-brand-charcoal/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6 text-white">More than a gym. <br/><span className="text-brand-accent">An Iron Forge.</span></h2>
              <p className="text-gray-300 font-body text-lg mb-6 leading-relaxed">
                We believe in raw strength, disciplined training, and unwavering commitment. Ironforge isn't for those who want the easy way out. It's for those who want results.
              </p>
              <p className="text-gray-300 font-body text-lg mb-8 leading-relaxed">
                Equipped with competition-grade gear and led by elite coaches, we provide the environment you need to forge your ultimate physique and performance.
              </p>
              <Link to="/about">
                <Button variant="outline">Our Story</Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" alt="Gym equipment" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-black p-8 border-l-4 border-brand-accent hidden md:block shadow-xl">
                <p className="text-5xl font-display font-bold text-white mb-2">24/7</p>
                <p className="text-gray-400 font-body uppercase tracking-wider text-sm">Access for Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
