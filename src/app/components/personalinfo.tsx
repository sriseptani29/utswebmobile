import React from 'react';
import './personalinfo';

const infos: string[] = [
  'TTL : Bandung, 02 September 2002',
  'Gender : Perempuan',
  'Tinggi Badan : 150 cm',
  'Berat Badan : 40 kg',
  'Status Pernikahan : Belum Menikah',
  'Whatsapp : +62 857 2430 5747',
  'Email : sriseptiani209@gmail.com'
];

  const PersonalInfo: React.FC = () => {
    return (
      <section id="my-infos">
      <div className="container mx-auto p-2 text-center pt-10">
      <h2 className="text-xl font-bold mb-4 text-center text-black-600">Personal Info</h2>
        <ul>
          {infos.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
        </div>
      </section>
    );
  };
  
  export default PersonalInfo;