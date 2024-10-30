import Image from "next/image";
import React from "react";

function ImageSelection() {
  return (
    <div>
      <label>Select Image of your room</label>
      <div className=" mt-3">
        <label htmlFor="upload-image">
          <div
            className={`p-28 border rounded-xl border-dotted flex justify-center items-center border-gray-400 bg-gray-200 cursor-pointer hover:shadow-lg`}
          >
            <Image
              src={"/imageupload.png"}
              width={70}
              height={70}
              alt=""
            ></Image>
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload-image"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default ImageSelection;
