import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";

const CompareSlider1 = () => {
  const [hasError, setHasError] = useState(false);

  const handleOnError = (error, errorInfo) => { 
    console.log("Error occurred:", error, errorInfo);
    setHasError(true);
  };

  return (
    <div className="mainWrapper">
      <div className="contentWrapper">
        {hasError ? (
          <div>Error occurred while loading images.</div>
        ) : (
          <> 
            <ReactCompareImage leftImage="/Veneers/slider-images/image01.jpg" rightImage="/Veneers/slider-images/image02.jpg" alt="slider"/>
            {/* <ReactCompareImage leftImage="/Veneers/veneers-before-img.jpg" rightImage="/Veneers/veneers-after-img.jpg" alt="slider"/> */}
          </>
        )}
      </div>
    </div>
  );
};

export default CompareSlider1;
