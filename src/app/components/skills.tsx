import React from 'react';
import './skills.css';

// Definisikan tipe data array untuk skill
const skills: string[] = ['Accounting', 'Microsoft Office', 'Keterampilan Beradaptasi atau Belajar', 'HTML & CSS', 'Problem Solving'];

const MySkills: React.FC = () => {
  return (
    <section id="my-skills">
    <div className="container mx-auto p-5 text-center pt-20">
    <h2 className="text-2xl font-bold mb-4 text-center text-black-600 dark:text-white">My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li  key={index}>{skill}</li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default MySkills;