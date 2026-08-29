import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-display font-bold tracking-widest text-white block">
              IRONFORGE
            </Link>
            <p className="text-gray-400 font-body text-sm leading-relaxed">
              Premium fitness facility designed for those who take their training seriously. Build strong. Live stronger.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors font-display tracking-wider">IG</a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors font-display tracking-wider">FB</a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors font-display tracking-wider">X</a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors font-display tracking-wider">YT</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-display uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Programs', 'Trainers', 'Schedule', 'Membership'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white text-sm font-body transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <span>123 Fitness Avenue, Bandra West<br />Mumbai, MH 400050</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <span>hello@ironforge.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display uppercase tracking-wider mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get training tips and gym updates.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-brand-charcoal text-white border border-white/20 px-4 py-2 w-full focus:outline-none focus:border-brand-accent font-body text-sm"
                required
              />
              <button type="submit" className="bg-brand-accent text-brand-black px-4 py-2 font-display uppercase tracking-wider hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-body">
          <p>&copy; {new Date().getFullYear()} Ironforge Fitness. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
