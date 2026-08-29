import { useState } from 'react';


const Schedule = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const filters = ['All', 'Strength', 'HIIT', 'Boxing', 'Yoga', 'Functional Training', 'Mobility', 'Conditioning'];
  const [activeFilter, setActiveFilter] = useState('All');
  
  const scheduleData = [
    { time: '06:00 AM', cls: 'Pure Strength', type: 'Strength' },
    { time: '08:00 AM', cls: 'HIIT Conditioning', type: 'HIIT' },
    { time: '10:00 AM', cls: 'Mobility Flow', type: 'Mobility' },
    { time: '12:00 PM', cls: 'Open Gym', type: 'All' }, // Always shows if open? Let's just say Functional Training
    { time: '05:00 PM', cls: 'Powerlifting Base', type: 'Strength' },
    { time: '06:00 PM', cls: 'Heavy Bag Work', type: 'Boxing' },
    { time: '07:00 PM', cls: 'Metcon 45', type: 'Conditioning' },
    { time: '08:00 PM', cls: 'Recovery Yoga', type: 'Yoga' },
  ];

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4">
      <div className="text-center py-16 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-display uppercase font-bold text-white mb-6">Class Schedule</h1>
        <p className="text-gray-400 font-body max-w-2xl mx-auto text-lg mb-10">
          Plan your week. Show up. Put in the work. Filter by class type below.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 font-display uppercase tracking-wider text-sm transition-colors border ${
                activeFilter === filter 
                  ? 'bg-brand-accent text-brand-black border-brand-accent' 
                  : 'bg-transparent text-gray-400 border-gray-600 hover:border-brand-accent hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto border border-white/10 bg-brand-charcoal">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b border-white/10 text-white font-display uppercase tracking-wider text-xl bg-brand-black/50">Time</th>
              {days.map(day => (
                <th key={day} className="p-4 border-b border-white/10 text-brand-accent font-display uppercase tracking-wider text-xl bg-brand-black/50 text-center">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody className="font-body text-sm text-gray-300">
            {scheduleData.map((row, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                <td className="p-4 font-bold text-white whitespace-nowrap">{row.time}</td>
                {days.map((_, j) => {
                  const shouldShow = (i + j) % 3 !== 0; // arbitrary dummy logic
                  const isVisibleFilter = activeFilter === 'All' || activeFilter === row.type;
                  
                  return (
                    <td key={j} className="p-4 text-center border-l border-white/5">
                      {shouldShow && isVisibleFilter ? (
                        <div className="inline-block px-3 py-2 bg-brand-black border border-white/10 rounded-sm w-full max-w-[140px]">
                          <span className="block font-bold text-white mb-1">{row.cls}</span>
                          <span className="text-xs text-brand-accent uppercase tracking-widest">{row.type}</span>
                        </div>
                      ) : (
                        <span className="text-gray-600">-</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
