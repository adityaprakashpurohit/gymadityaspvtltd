import { programs } from '../data/mockData';
import { Button } from '../components/Button';
import { Clock, Activity } from 'lucide-react';

const Programs = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="text-center py-16 px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-display uppercase font-bold text-white mb-6">Our Programs</h1>
        <p className="text-gray-400 font-body max-w-2xl mx-auto text-lg">
          Specialized training routines designed by experts. Whether you want to build raw strength, burn fat, or improve functional fitness, we have a path for you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-brand-charcoal group overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-colors">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display uppercase font-bold text-white mb-3">{program.title}</h3>
                <p className="text-gray-400 font-body text-sm mb-6 h-16">{program.description}</p>
                <div className="flex justify-between items-center text-sm font-body text-brand-accent mb-8">
                  <span className="flex items-center"><Clock className="h-4 w-4 mr-2" /> {program.duration}</span>
                  <span className="flex items-center"><Activity className="h-4 w-4 mr-2" /> {program.difficulty}</span>
                </div>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
