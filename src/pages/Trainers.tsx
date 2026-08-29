import { trainers } from '../data/mockData';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Trainers = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="text-center py-16 px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-display uppercase font-bold text-white mb-6">Our Coaches</h1>
        <p className="text-gray-400 font-body max-w-2xl mx-auto text-lg">
          Meet the experts who will push you beyond your limits. Our coaches are former athletes and specialized professionals dedicated to your success.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="group relative overflow-hidden bg-brand-charcoal border border-white/10">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-3xl font-display uppercase font-bold text-white mb-1">{trainer.name}</h3>
                <p className="text-brand-accent font-body text-sm mb-4">{trainer.specialty}</p>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="text-white hover:text-brand-accent transition-colors"><FaInstagram className="h-5 w-5" /></a>
                  <a href="#" className="text-white hover:text-brand-accent transition-colors"><FaTwitter className="h-5 w-5" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
