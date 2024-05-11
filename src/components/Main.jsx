import PropTypes from "prop-types";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function Main(props) {
  const { data } = props;

  // Check if data is available before accessing its properties
  const imageUrl = data ? data.hdurl : "";
  const imageAlt = data ? data.title || "bg-img" : "bg-img";
  const title = data ? data.title : "";
  const explanation = data ? data.explanation : "";
  const date = data ? data.date : "";
  const navigate = useNavigate();

  const RedirectToLandingPage = () => {
    navigate('/landing');
  };
  return (
    <div className="imgContainer grid grid-cols-2 bg-gradient-to-r from-gray-700 to-slate-900  h-fit ">
      <div className="grid-rows-2 ">
        <div className="mt-4 ">
        <button 
        onClick={RedirectToLandingPage}
         className="text-white bg-gradient-to-tl from-cyan-900 to-gray-900  border-2 rounded-lg m-2 w-fit h-fit flex items-center font-sans text-md px-4 text-bold">
          <FaArrowLeft className="mr-2"></FaArrowLeft>Back
        </button>
        </div>
        <div className="m-2 rounded-4xl lg:h-fit self-center border-2 bg-[url('../public/bg.jpg')] sm:p-4 sm:m-2 sm:overflow-auto">
          <p className="text-white text-center mt-4 text-5xl font-mono ">
            {title}
          </p>
          <p className="date text-xl text-white font-serif m-8 ">
            Date : {date}
          </p>
          <p className=" text-white font-sans text-justify m-8 ">
            {explanation}
          </p>
        </div>
      </div>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="bgImage h-screen rounded-4xl p-4 "
      />
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.shape({
    hdurl: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
};
