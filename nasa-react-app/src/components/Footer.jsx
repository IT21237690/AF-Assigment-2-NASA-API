
// import PropTypes from 'prop-types';

// export default function Footer(props) {
//     const {  handleToggleModal, data } = props;

//     // Ensure data is available and has expected properties before rendering
//     const title = data ? data.title : '';

//     return (
//         <footer>
//             {/* Gradient background */}
//             <div className="bgGradient"></div>
//             <div>
//                 {/* Render title if available */}
//                 <h2>{title}</h2>
//             </div>
//             {/* Button to toggle modal */}
//             <button onClick={handleToggleModal}>
//                 {/* Use appropriate icon */}
//                 <i className="fas fa-info-circle"></i>
//             </button>
//         </footer>
//     );
// }

// Footer.propTypes = {
//     showModal: PropTypes.bool.isRequired,
//     handleToggleModal: PropTypes.func.isRequired,
//     data: PropTypes.shape({
//         title: PropTypes.string,
//     }),
// };
