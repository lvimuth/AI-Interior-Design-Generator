"use client";

import React from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";

function CreateNew() {
  const onHandleInputChange = (value, fieldName) => {
    // Your input change logic here
  };

  return (
    <div>
      <h2 className="font-bold text-4xl text-primary text-center">
        Experience the Magic of AI Remodeling
      </h2>
      <p className="text-center text-gray-500">
        Transform any room with a click, Select a space, choose a style, and
        watch as AI instantly reimagines your environment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-10">
        {/* Image upload section */}
        <ImageSelection
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />
        {/* Form input selection */}

        <div>
          {/* Room Type */}
          <RoomType />
          {/* Design Type */}

          {/* Additional Requirement text area */}

          {/* Button to generate image */}
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
