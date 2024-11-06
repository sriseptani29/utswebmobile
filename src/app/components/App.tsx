import React from 'react';
import './MyGallery.css';

// Data Hobi
const hobbies = [
  { name: 'Reading', image: '/images/hobby1.jpg' },
  { name: 'Cooking', image: '/images/hobby2.jpg' },
  { name: 'Writing', image: '/images/hobby3.jpg' },
  { name: 'Watching', image: '/images/hobby4.jpg' },
];

const  App = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-center text-black">My Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {hobbies.map((hobby, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              src={hobby.image} 
              alt={hobby.name} 
              className="w-full h-40 object-cover rounded-xl" 
            />
            <span>{hobby.name}</span>
          </div>
        ))}
        </div>
    </section>
  );
};

export default App;
