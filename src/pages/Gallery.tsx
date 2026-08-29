const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=800&auto=format&fit=crop'
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="text-center py-16 px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-display uppercase font-bold text-white mb-6">The Facility</h1>
        <p className="text-gray-400 font-body max-w-2xl mx-auto text-lg">
          Take a look inside Ironforge. 15,000 square feet of competition-grade equipment, multiple lifting platforms, and functional turf areas.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="group overflow-hidden bg-brand-charcoal aspect-square">
              <img 
                src={src} 
                alt={`Facility ${i + 1}`} 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
