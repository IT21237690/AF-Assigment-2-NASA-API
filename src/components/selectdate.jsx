import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

const DateInputForm = ({ onSubmit }) => {
  const navigate = useNavigate();

  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(date);
    navigate("/marsPhotoes")
  };
  const RedirectToLandingPage = () => {
    navigate('/landing');
  };

  return (
    <div>
    <img
        src="../public/roverBg.jpg" // Replace with your image path
        alt="Landing page background"
        className="absolute inset-0 object-cover w-full h-full z-0" // Background image
      />
      <div>
      
      <button
        onClick={RedirectToLandingPage}
        className="
         bg-gray-800 hover:bg-orange-900 text-white  border-2 rounded-lg m-2 w-fit h-fit flex items-center font-sans text-md px-4 text-bold row-span-2 ml-4  relative"
      ><FaArrowLeft className="mr-2"></FaArrowLeft>Home
      </button>
      </div>
    <div className=" relative rounded-lg shadow-md z-1 backdrop-blur-sm bg-slate-400/10 m-24 p-24">  {/* Content on top */}
        <div className="z-10">
        <h1 className="text-white text-7xl text-center font-mono">Mars Rover Photoes</h1>

        <form onSubmit={handleSubmit} className="flex justify-center text-gray-700">
  <input
    type="date"
    id="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    required
    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent w-64 mr-8 mt-4"
  />
 <button type="submit" 
 className="bg-gray-800 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-md shadow-sm w-64 ml-8 mt-4"
 >
    Search
  </button>
</form>
        </div>
      </div>
    </div>
  );
};

export default DateInputForm;
