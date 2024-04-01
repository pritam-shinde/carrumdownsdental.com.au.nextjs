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