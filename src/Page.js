import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import { HiInformationCircle, HiExternalLink } from 'react-icons/hi';
import { Button, Select, Label, Alert } from 'flowbite-react';

import L from 'leaflet';

import newScenarioIcon from './images/newScenario.png';
import signInIcon from './images/signIn.png';
import supportIcon from './images/support.png';
import flagIcon from './images/flag.png';
import languageIcon from './images/language.png';

const NumberedIcon = ({ number }) => (
  <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-primary-600 border border-primary-600 text-sm font-medium mr-2">
    {number}
  </div>
);

const BusinessLocation = () => {
  const center = [24.7136, 46.6753];

  const restrictedArea = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "Polygon",
      coordinates: [[
        [46.6700, 24.7150],
        [46.6800, 24.7150],
        [46.6800, 24.7100],
        [46.6700, 24.7100],
        [46.6700, 24.7150]
      ]]
    }
  };

  const restrictedAreaStyle = {
    fillColor: 'red',
    fillOpacity: 0.5,
    color: 'red',
    weight: 2
  };

  const customMarkerIcon = L.divIcon({
    className: 'custom-marker',
    html: `
      <svg width="40" height="40" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="white" stroke="red" stroke-width="2"/>
        <text x="20" y="25" font-size="20" text-anchor="middle" fill="red">×</text>
      </svg>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });

  return (
    <div className="flex min-h-screen">
      <div className="w-1/6 bg-black text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold pl-2">Smart Advisor</h1>
          <ul className="mt-8 space-y-6">
            <li>
              <button className="w-full flex items-center text-left bg-gray-800 rounded-lg p-2 hover:bg-gray-700">
                <img src={newScenarioIcon} alt="New scenario" className="w-4 h-4 mr-2"/>
                <span>New Scenario</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <button className="flex items-center w-full text-left bg-transparent mb-4">
            <img src={supportIcon} alt="Support" className="w-4 h-4 mr-2"/>
            Support
          </button>
          <div>
            <button className="flex items-start w-full text-left">
              <img src={signInIcon} alt="Sign In" className="w-4 h-4 mr-2 mt-1"/>
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
      <div className="flex-grow flex flex-col">
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
            {/* <div className="flex items-center text-primary-700">
              <FaCircle className="text-primary-700 mr-1" />
              
              Premise
            </div> */}
            <div className="flex items-center text-primary-700">
              <NumberedIcon number={3} />
              Premise
            </div>
            <div className="w-8 border-t" />
            <div className="flex items-center text-gray-400">
              <img src={flagIcon} alt="Flag" className="w-5 h-5 mr-1"/>
              Results
            </div>
          </div>
          <div className="flex items-center">
            <img src={languageIcon} alt="language" className="mr-1"/>
            <div className="p-1 text-gray-900 mr-2 text-sm">العربية</div>
          </div>
        </div>
        <main className="flex flex-1">
          <div className="w-1/2 p-4 overflow-y-auto">
            <div className="bg-white">
              <div className="mb-6 flex items-center justify-between">
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center text-gray-500 hover:text-gray-700"
                >
                  <FaArrowLeft className="mr-2" />
                  Back
                </button>
                <div className="flex items-center">
                  <div className="w-20 bg-primary-600 h-2 rounded-l" />
                  <div className="w-32 bg-gray-300 h-2 rounded-r" />
                </div>
              </div>
              <div className="mb-8 text-2xl font-semibold">Specify the business location</div>
              <div className="space-y-4">
                <div>
                  <Label>Amana</Label>
                  <Select>
                    <option>Riyadh</option>
                  </Select>
                </div>
                <div>
                  <Label>Municipality</Label>
                  <Select>
                    <option>Great Municipality</option>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>District</Label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded shadow"
                      placeholder="2121 Alamal Dist."
                    />
                    <div className="text-sm text-gray-500">Optional</div>
                  </div>
                  <div>
                    <Label>Street</Label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded shadow"
                      placeholder="8228 King Abdulaziz Rd."
                    />
                    <div className="text-sm text-gray-500">Optional</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="shopping-mall" className="mr-2" />
                  <Label htmlFor="shopping-mall" className="text-sm">
                    My business will be located in a shopping mall
                  </Label>
                </div>
                <Alert color="failure" className="p-4">
                  <div className="flex">
                    <HiInformationCircle className="h-5 w-5 text-red-700 mt-0.5 mr-2 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-red-700">
                        You will not be able to perform activities in the specified area
                      </h3>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-red-700">
                      Select another location or use map based insights to find the best one
                    </p>
                    <div className="mt-4">
                      <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded inline-flex items-center">
                        Map Based Insights
                        <HiExternalLink className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </Alert>
                <Button className="w-full bg-primary-600">
                  Continue with restriction acknowledgement
                </Button>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full">
          <MapContainer
        className="h-full w-full"
        center={center}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON 
          data={restrictedArea} 
          style={restrictedAreaStyle}
        />
        <Marker position={center} icon={customMarkerIcon}>
          <Popup closeButton={false} closeOnClick={false} autoClose={false} className="custom-popup">
            <div className="text-center">
              <div className="font-bold">Restricted Area</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessLocation;
