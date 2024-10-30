import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function RoomType({ selectedRoomType }) {
  return (
    <div>
      <label htmlFor="" className="text-slate-400">
        Select Room Type *
      </label>
      <Select onValueChange={(value) => selectedRoomType(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Room Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Living Room">Living Room</SelectItem>
          <SelectItem value="Bed Room">Bed Room</SelectItem>
          <SelectItem value="Kitchen">Kitchen</SelectItem>
          <SelectItem value="Office">Office</SelectItem>
          <SelectItem value="Bathroom">Bathroom</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default RoomType;
