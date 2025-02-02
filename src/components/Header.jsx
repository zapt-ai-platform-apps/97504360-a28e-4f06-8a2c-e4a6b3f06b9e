import React from 'react';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MeetHalfway</h1>
      <nav>
        <ul className="flex space-x-4">
          <li className="cursor-pointer">Plan Meeting</li>
          <li className="cursor-pointer">History</li>
          <li className="cursor-pointer">Favorites</li>
        </ul>
      </nav>
    </header>
  );
}