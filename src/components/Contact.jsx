import React from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}