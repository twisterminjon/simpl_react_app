import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { HiInformationCircle, HiExternalLink } from 'react-icons/hi';
import { Button, Select, Label, Alert } from 'flowbite-react';

const QuestionBox = () => {
  return (
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
        <div className="mb-8 text-2xl font-semibold">
          Specify the business location
        </div>
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
                  You will not be able to perform activities in the specified
                  area
                </h3>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-red-700">
                Select another location or use map based insights to find the
                best one
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
  );
};

export default QuestionBox;
