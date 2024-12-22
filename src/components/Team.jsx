import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Club President",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 2,
    name: "Aryan",
    role: "Technical Lead",
    image: "/aryan.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Event Coordinator",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}