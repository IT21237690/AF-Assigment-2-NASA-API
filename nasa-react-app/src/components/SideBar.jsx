
// import PropTypes from 'prop-types';

// export default function SideBar(props) {
//     const { handleToggleModal, data } = props;

//     // Ensure data is available and has expected properties before rendering
//     const title = data ? data.title : '';
//     const date = data ? data.date : '';
//     const explanation = data ? data.explanation : '';

//     return (
//         <div className="sidebar">
//             {/* Overlay to handle modal toggling */}
//             <div onClick={handleToggleModal} className="bgOverlay"></div>
//             <div className="sidebarContents">
//                 {/* Render title if available */}
//                 <h2>{title}</h2>
//                 <div className="descriptionContainer">
//                     {/* Render date if available */}
//                     <p className="descriptionTitle">{date}</p>
//                     {/* Render explanation if available */}
//                     <p>{explanation}</p>
//                 </div>
//                 {/* Button to close the modal */}
//                 <button onClick={handleToggleModal}>
//                     {/* Use appropriate icon */}
//                     <i className="fas fa-arrow-right"></i>
//                 </button>
//             </div>
//         </div>
//     );
// }

// SideBar.propTypes = {
//     handleToggleModal: PropTypes.func.isRequired,
//     data: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         date: PropTypes.string,
//         explanation: PropTypes.string,
//     }),
// };
