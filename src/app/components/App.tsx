import React from 'react';
import './MyGallery.css';

// Data Hobi
const hobbies = [
  { name: 'Reading', image: '/images/hobby1.jpg' },
  { name: 'Cooking', image: '/images/hobby2.jpg' },
  { name: 'Writing', image: '/images/hobby3.jpg' },
  { name: 'Watching', image: '/images/hobby4.jpg' },
];

const MyGallery = () => {
  return (
    <section className="p-2 bg-gray-30 shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-black-600">My Gallery</h2>
      <div className="grid grid-cols-12 gap-1">
        {hobbies.map((hobby, index) => (
          <div key={index} className="col-span-12 md:col-span-3 flex flex-col items-center">
            <img 
              src={hobby.image} 
              alt={hobby.name} 
              className="w-40 h-40 object-cover rounded-xl shadow" 
            />
            <span className="mt-2 text-gray-800 text-center">{hobby.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="flex items-center justify-center">
        <div className="max-w-7xl w-full bg-white p-10 rounded-4xl shadow-lg">
        <MyGallery />
    </div>
    </div>
  );
};

export default App;
