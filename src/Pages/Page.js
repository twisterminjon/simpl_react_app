import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import MapBox from '../Components/MapBox';
import QuestionBox from '../Components/QuestionBox';

const BusinessLocation = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <main className="flex flex-1">
          <QuestionBox />
          <MapBox />
        </main>
      </div>
    </div>
  );
};

export default BusinessLocation;
