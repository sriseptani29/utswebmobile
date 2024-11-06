import React from 'react';
import './personalinfo.css';
import { FaUserAlt, FaBirthdayCake, FaGenderless, FaWeight, FaRuler, FaUserFriends, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const infos: { label: string; value: string; icon: JSX.Element }[] = [
  { label: 'Name', value: 'Sri Septiani', icon: <FaUserAlt /> },
  { label: 'TTL', value: 'Bandung, 02 September 2002', icon: <FaBirthdayCake /> },
  { label: 'Gender', value: 'Perempuan', icon: <FaGenderless /> },
  { label: 'Tinggi Badan', value: '150 cm', icon: <FaRuler /> },
  { label: 'Berat Badan', value: '40 kg', icon: <FaWeight /> },
  { label: 'Status Pernikahan', value: 'Belum Menikah', icon: <FaUserFriends /> },
  { label: 'Whatsapp', value: '+62 857 2430 5747', icon: <FaPhoneAlt /> },
  { label: 'Email', value: 'sriseptiani209@gmail.com', icon: <FaEnvelope /> }
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
              <span className="icon text-2xl mb-2 md:mb-0 md:mr-3">{info.icon}</span>
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

