import React from 'react';

import newScenarioIcon from '../images/newScenario.png';
import signInIcon from '../images/signIn.png';
import supportIcon from '../images/support.png';

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-black text-white p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold pl-2">Smart Advisor</h1>
        <ul className="mt-8 space-y-6">
          <li>
            <button className="w-full flex items-center text-left bg-gray-800 rounded-lg p-2 hover:bg-gray-700">
              <img
                src={newScenarioIcon}
                alt="New scenario"
                className="w-4 h-4 mr-2"
              />
              <span>New Scenario</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <button className="flex items-center w-full text-left bg-transparent mb-4">
          <img src={supportIcon} alt="Support" className="w-4 h-4 mr-2" />
          Support
        </button>
        <div>
          <button className="flex items-start w-full text-left">
            <img src={signInIcon} alt="Sign In" className="w-4 h-4 mr-2 mt-1" />
            <div className="pr-4">
              <div className="font-semibold text-white">Sign in</div>
            </div>
          </button>
          <div className="text-sm text-white text-opacity-80 pl-6">
            Save your progress and keep all scenarios in one place
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
