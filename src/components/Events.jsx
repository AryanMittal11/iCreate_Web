import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Tech Workshop 2024",
    date: "2024-04-15",
    description: "Learn the latest web development technologies and best practices.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    isUpcoming: true
  },
  {
    id: 2,
    title: "Hackathon 2024",
    date: "2024-05-20",
    description: "48-hour coding challenge to build innovative solutions.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    isUpcoming: true
  }
];

const pastEvents = [
  {
    id: 3,
    title: "AI Conference",
    date: "2024-02-10",
    description: "Exploring the future of artificial intelligence.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    isUpcoming: false
  }
];

export default function Events() {
  return (
    <section id="events" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <Calendar className="h-5 w-5 mr-2" />
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center my-12 text-gray-900 dark:text-white">
          Past Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover filter grayscale"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}