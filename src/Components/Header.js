import React from 'react';
import 'leaflet/dist/leaflet.css';
import { FaCheckCircle } from 'react-icons/fa';

import flagIcon from '../images/flag.png';
import languageIcon from '../images/language.png';

const NumberedIcon = ({ number }) => (
  <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-primary-600 border border-primary-600 text-sm font-medium mr-2">
    {number}
  </div>
);

const Header = () => {
  return (
    <div className="w-full p-6 flex items-center justify-between bg-white border-b-2">
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-primary-700">
          <FaCheckCircle className="text-primary-700 mr-1 w-5 h-5" />
          Basics
        </div>
        <div className="w-8 border-t" />
        <div className="flex items-center text-primary-700">
          <FaCheckCircle className="text-primary-700 mr-1 w-5 h-5" />
          Activities
        </div>
        <div className="w-8 border-t" />
        <div className="flex items-center text-primary-700">
          <NumberedIcon number={3} />
          Premise
        </div>
        <div className="w-8 border-t" />
        <div className="flex items-center text-gray-400">
          <img src={flagIcon} alt="Flag" className="w-5 h-5 mr-1" />
          Results
        </div>
      </div>
      <div className="flex items-center">
        <img src={languageIcon} alt="language" className="mr-1" />
        <div className="p-1 text-gray-900 mr-2 text-sm">العربية</div>
      </div>
    </div>
  );
};

export default Header;
