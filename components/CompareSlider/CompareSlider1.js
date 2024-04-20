// components/ImageSlider.js
import React, { useState } from "react";
// import "../../styles/compareSlider.css";

const CompareSlider1 = ({ style }) => {
  const [position, setPosition] = useState(50);
  return (
    <div className="comparison-main">
      <div
        className="comparison-container"
        style={{
          // "--position": ${position}%,
           "--position": position + "%" 
        }}
      >
      <div className="comparison-image-container">
        <img
          className="comparison-image-before comparison-slider-image"
          src="/Veneers/slider-images/compare-slider1.jpg"
          alt="color photo"
        />
        <img
          className="comparison-image-after comparison-slider-image"
          src="/Veneers/slider-images/compare-slider2.jpg"
          alt="black and white"
        />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        aria-label="Percentage of before photo shown"
        className="comparison-slider"
      />
      <div className="comparison-slider-line" aria-hidden="true"></div>
      <div className="comparison-slider-button" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="128"
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="96"
            y1="128"
            x2="16"
            y2="128"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <polyline
            points="48 160 16 128 48 96"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></polyline>
          <line
            x1="160"
            y1="128"
            x2="240"
            y2="128"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <polyline
            points="208 96 240 128 208 160"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></polyline>
        </svg>
      </div>
    </div>
    </div >
  );
};

export default CompareSlider1;

// src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
// src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"


// import React, { useState } from "react";
// import ReactCompareImage from "react-compare-image";

// const CompareSlider1 = () => {
//   const [hasError, setHasError] = useState(false);

//   const handleOnError = (error, errorInfo) => {
//     console.log("Error occurred:", error, errorInfo);
//     setHasError(true);
//   };

//   return (
//     <div className="mainWrapper">
//       <div className="contentWrapper">
//         {hasError ? (
//           <div>Error occurred while loading images.</div>
//         ) : (
//           <>
//             <ReactCompareImage leftImage="/Veneers/slider-images/image01.jpg" rightImage="/Veneers/slider-images/image02.jpg" alt="slider"/>
//             {/* <ReactCompareImage leftImage="/Veneers/veneers-before-img.jpg" rightImage="/Veneers/veneers-after-img.jpg" alt="slider"/> */}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CompareSlider1;




// import React, { useState } from "react";
// import { ComparisonSlider } from 'react-comparison-slider';

// const CompareSlider1 = () => {
//   const [hasError, setHasError] = useState(false);

//   const handleOnError = (error, errorInfo) => {
//     console.log("Error occurred:", error, errorInfo);
//     setHasError(true);
//   };

//   return (
//     <div className="mainWrapper">
//       <div className="contentWrapper">
//         {hasError ? (
//           <div>Error occurred while loading images.</div>
//         ) : (
//           <>
//           <div className="mainWrapper">
//             <div className="contentWrapper">
//               <ComparisonSlider
//                 defaultValue={50}
//                 itemOne={<img src="/Veneers/slider-images/image01.jpg" alt="Image 1" />}
//                 itemTwo={<img src="/Veneers/slider-images/image02.jpg" alt="Image 2" />}
//                 aspectRatio={16 / 9}
//                 orientation="horizontal"
//               />
//             </div>
//           </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CompareSlider1;




