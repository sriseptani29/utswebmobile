import React from 'react';
import './personalinfo.css';

const infos: { label: string; value: string }[] = [
  { label: 'Name', value: 'Sri Septiani' },
  { label: 'TTL', value: 'Bandung, 02 September 2002' },
  { label: 'Gender', value: 'Perempuan' },
  { label: 'Tinggi Badan', value: '150 cm' },
  { label: 'Berat Badan', value: '40 kg' },
  { label: 'Status Pernikahan', value: 'Belum Menikah' },
  { label: 'Whatsapp', value: '+62 857 2430 5747' },
  { label: 'Email', value: 'sriseptiani209@gmail.com' }
];

const PersonalInfo: React.FC = () => {
  return (
    <section id="my-infos">
      <div className="container mx-auto p-4 text-center pt-10">
        <h2 className="text-3xl font-bold mb-6">Personal Info</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
          {infos.map((info, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center text-justify p-4 border-[hsl(45,100%,97%)] rounded-lg bg-[hsl(50,100%,90%)] dark:bg-[hsl(25,35%,25%)] shadow hover:bg-[hsl(30,100%,85%)] dark:hover:bg-[hsl(20,50%,35%)] transition"
            >
              <span className="info-label font-bold mr-1">{info.label}:</span>
              <span>{info.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
