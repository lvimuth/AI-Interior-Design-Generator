"use client";

import React, { useState } from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditionalReq from "./_components/AdditionalReq";
import { Button } from "@/components/ui/button";
import axios from "axios";

function CreateNew() {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (value, fieldName) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
    console.log(formData);
  };

  const GenerateAIImage = async () => {
    try {
      const result = await axios.post("/api/redesign-room", formData);
      console.log("Result:", result);
    } catch (error) {
      console.error(
        "Error generating AI image:",
        error.response ? error.response.data : error.message
      );
    }
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
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        {/* Image upload section */}
        <ImageSelection
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />
        {/* Form input selection */}

        <div>
          {/* Room Type */}
          <RoomType
            selectedRoomType={(value) => onHandleInputChange(value, "roomType")}
          />
          {/* Design Type */}
          <DesignType
            selectedDesignType={(value) =>
              onHandleInputChange(value, "designType")
            }
          />
          {/* Additional Requirement text area */}
          <AdditionalReq
            additionalReqInput={(value) =>
              onHandleInputChange(value, "additionalReq")
            }
          />

          {/* Button to generate image */}

          <Button className="w-full mt-5" onClick={GenerateAIImage}>
            Generate
          </Button>
          <p className="text-sm text-gray-400 mb-52">
            NOTE: 1 credit will user to redesign your room
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
