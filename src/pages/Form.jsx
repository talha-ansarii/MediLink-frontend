import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    bp: '',
    symotoms: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    navigate('/result');
  };

  return (
    <>
<Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">MediLink</h1>
          <h2 className="text-2xl font-bold text-gray-800">Patient Diagnosis</h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="age">
              Age
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="height">
              Height
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="Enter your height"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="weight">
              Weight
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Enter your weight"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
              Blood Pressure
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="bp"
              name="bp"
              value={formData.bp}
              onChange={handleChange}
              placeholder="Enter your Blood Pressure"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
              Symptoms
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="symotoms"
              name="symptoms"
              value={formData.symotoms}
              onChange={handleChange}
              placeholder="Enter your Symptoms"
            />
          </div>
          <button
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
            type="submit"
          >
            Result
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default FormPage;
