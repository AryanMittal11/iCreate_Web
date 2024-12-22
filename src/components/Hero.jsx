import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [message, setMessage] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0); // Track position within the current message
  const messages = ['Welcome to iCreate Club', 'Welcome to Your Own Club'];
  const typingSpeed = 150; // Speed of typing (ms)
  const deletingSpeed = 100; // Speed of deleting (ms)
  const delayAfterComplete = 1500; // Delay before starting to erase (ms)

  useEffect(() => {
    const currentMessage = messages[index];
    let timeout;

    if (isDeleting) {
      // Deleting logic
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setMessage(currentMessage.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % messages.length); // Move to the next message
      }
    } else {
      // Typing logic
      if (charIndex < currentMessage.length) {
        timeout = setTimeout(() => {
          setMessage(currentMessage.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true); // Start deleting after typing is complete
        }, delayAfterComplete);
      }
    }

    return () => clearTimeout(timeout); // Clean up timeout on unmount
  }, [charIndex, isDeleting, index, messages]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            {message}
            <span className="cursor">|</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay">
            Join us in exploring the latest technologies, building amazing projects, and growing together as a community.
          </p>
          <div className="space-x-4 animate-fade-in-delay-2">
            <a
              href="#events"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Explore Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Join Us
            </a>
          </div>
        </div>
        <div className="md:w-1/2 animate-float">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Students collaborating"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
