import React from "react";
import ImageSelection from "./_components/ImageSelection";

function CreateNew() {
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
        <ImageSelection />
        {/* Form input selection */}
      </div>
    </div>
  );
}

export default CreateNew;
