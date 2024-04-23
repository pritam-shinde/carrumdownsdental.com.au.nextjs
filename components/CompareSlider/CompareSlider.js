import Image from "next/image";
import { useState, useRef } from "react";

const CompareSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

    const handleMove = (event) => {
        if (!isDragging) return;

        const sliderRect = sliderRef.current.getBoundingClientRect();
        const x = event.clientX - sliderRect.left;
        let percent = (x / sliderRect.width) * 100;

        // Ensure slider doesn't go beyond bounds
        percent = Math.max(0, Math.min(percent, 100));

        setSliderPosition(percent);
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="w-100 position-relative" onMouseUp={handleMouseUp}>
            <div
                ref={sliderRef}
                className="position-relative w-100 max-w-700 aspect-70/45 m-auto overflow-hidden"
                onMouseMove={handleMove}
                onMouseDown={handleMouseDown}
            >
                <Image
                    className="img-fluid"
                    priority
                    alt="Before"
                    src="/Veneers/after-1.jpg"
                    width={600}
                    height={300}
                    style={{ pointerEvents: 'none' }}
                />
                <div 
                    className="position-absolute top-0 start-0 end-0 w-100 max-w-700 aspect-70/45 m-auto overflow-hidden select-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, inset: "0",pointerEvents: 'none'  }}
                >
                    <div >
                        <Image
                            priority
                            alt="After"
                            src="/Veneers/before-1.jpg"
                            width={600}
                            height={300}
                            style={{ pointerEvents: 'none' }}
                        />
                    </div>
                </div>
                <div
                    className="position-absolute top-0 h-100 bottom-0 bg-white"
                    style={{
                        left: `calc(${sliderPosition}% - 1px)`,
                        cursor: "ew-resize",
                        width:"4px",
                        top:"0",
                        pointerEvents: 'none' 
                    }}
                >
                    <div className="bg-white position-absolute rounded-circle h-3 w-3 start-0 top-50 translate-middle-y" style={{ height: '12px', width: '12px', top: '50%', left: '0', transform: 'translateY(-50%)' }}/>
                </div>
            </div>
        </div>
    );
};

export default CompareSlider;


// import React, { useState } from "react";
// // import "../../styles/compareSlider.css";

// const CompareSlider1 = ({ style }) => {
//   const [position, setPosition] = useState(50);
//   return (
//     <div className="comparison-main">
//       <div
//         className="comparison-container"
//         style={{
//           "--position": `${position}%`
//           //  "--position": position + "%" 
//         }}
//       >
//       <div className="comparison-image-container">
//         <img
//           className="comparison-image-before comparison-slider-image"
//           src="/Veneers/slider-images/before-slider1.jpg"
//           // src="/Veneers/slider-images/compare-slider1.jpg"
//           alt="color photo"
//         />
//         <img
//           className="comparison-image-after comparison-slider-image"
//           src="/Veneers/slider-images/after-slider1.jpg"
//           // src="/Veneers/slider-images/compare-slider2.jpg"
//           alt="black and white"
//         />
//       </div>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={position}
//         onChange={(e) => setPosition(e.target.value)}
//         aria-label="Percentage of before photo shown"
//         className="comparison-slider"
//       />
//       <div className="comparison-slider-line" aria-hidden="true"></div>
//       <div className="comparison-slider-button" aria-hidden="true">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="30"
//           height="30"
//           fill="currentColor"
//           viewBox="0 0 256 256"
//         >
//           <rect width="256" height="256" fill="none"></rect>
//           <line
//             x1="128"
//             y1="40"
//             x2="128"
//             y2="216"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="16"
//           ></line>
//           <line
//             x1="96"
//             y1="128"
//             x2="16"
//             y2="128"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="16"
//           ></line>
//           <polyline
//             points="48 160 16 128 48 96"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="16"
//           ></polyline>
//           <line
//             x1="160"
//             y1="128"
//             x2="240"
//             y2="128"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="16"
//           ></line>
//           <polyline
//             points="208 96 240 128 208 160"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="16"
//           ></polyline>
//         </svg>
//       </div>
//     </div>
//     </div >
//   );
// };

// export default CompareSlider1;



// import React, { useState } from "react";

// const CompareSlider1 = ({ style }) => {
//   const [position, setPosition] = useState(50);

//   // Debounce function
//   const debounce = (func, delay) => {
//     let timeoutId;
//     return function () {
//       const context = this;
//       const args = arguments;
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         func.apply(context, args);
//       }, delay);
//     };
//   };

//   // Debounced setPosition function
//   const debouncedSetPosition = debounce((value) => {
//     setPosition(value);
//   }, 5); // Adjust delay as needed

//   const handleSliderChange = (e) => {
//     const value = e.target.value;
//     debouncedSetPosition(value);
//   };

//   return (
//     <div className="comparison-main">
//       <div
//         className="comparison-container"
//         style={{
//           "--position": position + "%",
//         }}
//       >
//         <div className="comparison-image-container">
//           <img
//             className="comparison-image-before comparison-slider-image"
//             src="/Veneers/slider-images/compare-slider1.webp"
//             alt="color photo"
//           />
//           <img
//             className="comparison-image-after comparison-slider-image"
//             src="/Veneers/slider-images/compare-slider2.webp"
//             alt="black and white"
//           />
//         </div>
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={position}
//           onChange={handleSliderChange} // Use debounced function
//           aria-label="Percentage of before photo shown"
//           className="comparison-slider"
//         />
//         <div className="comparison-slider-line" aria-hidden="true"></div>
//         <div className="comparison-slider-button" aria-hidden="true">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="30"
//             height="30"
//             fill="currentColor"
//             viewBox="0 0 256 256"
//           >
//             <rect width="256" height="256" fill="none"></rect>
//             <line
//               x1="128"
//               y1="40"
//               x2="128"
//               y2="216"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="16"
//             ></line>
//             <line
//               x1="96"
//               y1="128"
//               x2="16"
//               y2="128"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="16"
//             ></line>
//             <polyline
//               points="48 160 16 128 48 96"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="16"
//             ></polyline>
//             <line
//               x1="160"
//               y1="128"
//               x2="240"
//               y2="128"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="16"
//             ></line>
//             <polyline
//               points="208 96 240 128 208 160"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="16"
//             ></polyline>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompareSlider1;




// src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
// src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"







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



// import Image from "next/image";
// import { useState } from "react";

// const CompareSlider = () => {
//   const [sliderPosition, setSliderPosition] = useState(50);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleMove = (event) => {
//     if (!isDragging) return;

//     const rect = event.currentTarget.getBoundingClientRect();
//     const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
//     const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

//     setSliderPosition(percent);
//   };

//   const handleMouseDown = () => {
//     setIsDragging(true);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <div className="w-full relative" onMouseUp={handleMouseUp}>
//       <div
//         className="relative w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
//         onMouseMove={handleMove}
//         onMouseDown={handleMouseDown}
//       >
//         <Image
//           alt=""
//           fill
//           priority
          
//           src="https://images.unsplash.com/photo-1523435324848-a7a613898152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
//         />

//         <div
//           className="absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
//           style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
//         >
//           <Image
//             fill
//             priority
//             alt=""
//             src="/images/car.jpeg"
//             // src="https://images.unsplash.com/photo-1598875791852-8bb153e713f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2010&q=80"
//           />
//         </div>
//         <div
//           className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
//           style={{
//             left: `calc(${sliderPosition}% - 1px)`,
//           }}
//         >
//           <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompareSlider