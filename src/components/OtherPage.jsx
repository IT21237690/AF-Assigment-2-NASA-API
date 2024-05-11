import { useState } from "react";
import PropTypes from "prop-types";
import { FaArrowLeft , FaCircleXmark} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const OtherPage = ({ data }) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };
  const RedirectToDateSelect = () => {
    navigate("/selectDate");
  };
  return (
    <div className="grid grid-rows-2 h-fit bg-gradient-to-r from-orange-950 to-slate-900">
      <button
        onClick={RedirectToDateSelect}
        className="bg-gray-800 hover:bg-orange-900 text-white  border-2 rounded-lg m-2 w-fit h-fit flex items-center font-sans text-md px-4 text-bold row-span-2 ml-4  relative"      >
        <FaArrowLeft className="mr-2"></FaArrowLeft>Back
      </button>
      <h1 className="text-white text-7xl text-center font-mono">Mars Rover Photoes</h1>

      <div className="grid grid-cols-9 gap-2 p-4">
        {/* Map through all photos */}
        {data.map((photo) => (
          <img
            key={photo.id}
            src={photo.img_src}
            alt={`Mars Rover Image ${photo.id}`}
            className="w-full h-auto cursor-pointer"
            onClick={() => handleClick(photo.img_src)}
          />
        ))}
      </div>
      {/* Modal for displaying enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur-lg bg-white/30">
          <div className="max-w-fit max-h-fit m-24">
            <img
              src={selectedImage}
              alt="Enlarged Mars Rover Image"
              className="max-w-96 max-h-96 "
            />
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 m-4 text-white hover:text-gray-300 focus:outline-none "
            >
<FaCircleXmark size={24}></FaCircleXmark>            </button>
          </div>
        </div>
      )}
    </div>
  );
  
};

OtherPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img_src: PropTypes.string.isRequired,
    })
  ),
};

export default OtherPage;
