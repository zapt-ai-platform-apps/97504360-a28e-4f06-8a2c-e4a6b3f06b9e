import React from 'react';
import Header from './components/Header';
import MeetingPlanner from './components/MeetingPlanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Header />
      <main className="flex-grow h-full container mx-auto p-4">
        <MeetingPlanner />
      </main>
      <Footer />
    </div>
  );
}