import React from "react";
import { Textarea } from "@/components/ui/textarea";

function AdditionalReq({ additionalReqInput }) {
  return (
    <div className="mt-5">
      <label htmlFor="" className="text-gray-400">
        Enter Additional Requirement (Optional)
      </label>
      <Textarea
        className="mt-3"
        onChange={(e) => additionalReqInput(e.target.value)}
      />
    </div>
  );
}

export default AdditionalReq;
