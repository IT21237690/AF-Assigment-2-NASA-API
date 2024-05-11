import { useNavigate } from 'react-router-dom';

const LoggedInLandingPage = ({ handleLogout }) => {
  const navigate = useNavigate();

  const redirectToMain = () => {
    navigate('/main');
  };

  const redirectToOtherPage = () => {
    navigate('/selectDate');
  };

  return (
    <div className="landing-page flex justify-center items-center p-8 sm:p-16 md:p-32 lg:p-32"> {/* Responsive padding */}
      <img
        src="../public/landingBg.jpg" // Replace with your image path
        alt="Landing page background"
        className="absolute inset-0 object-cover w-full h-full z-0 " // Background image
      />
      <div className="landing-content relative rounded-lg shadow-md z-1 backdrop-blur-sm bg-slate-400/10 p-8">  {/* Content on top */}
        <div className="z-10">
          <h1 className="text-white text-7xl text-center">Welcome</h1>
          <h2 className="text-white text-center">"Exploration is in our nature. We began as wanderers, and we are wanderers still." </h2>
          <h2 className="text-white text-center">- Carl Sagan -</h2>
          <div className="flex justify-center"> {/* Center buttons responsively */}
            <button
              className="login-btn bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 disabled:opacity-50 mt-16 m-4"
              onClick={redirectToMain}
            >
              Astronomy Picture of the Day
            </button>
            <button
              className="login-btn bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 disabled:opacity-50 mt-16 m-4"
              onClick={redirectToOtherPage}
            >
              Mars Rover Photoes
            </button>
            <button
              className="login-btn bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 disabled:opacity-50 mt-16 m-4"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedInLandingPage;
