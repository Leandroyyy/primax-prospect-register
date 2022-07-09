import { IoTimeSharp } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { evoApi } from "../../services/api";

interface ActivityScheduleProps {
  name: string;
  area: string;
  capacity: number;
  ocupation: number;
  startTime: string;
  instructor: string;
  instructorPhoto?: string;
  activityDate: string;
}

export function Activity(props: ActivityScheduleProps) {
  return (
    <div className="flex-1 w-60 py-3 sm:px-4">
      <div className="flex flex-col justify-center items-center bg-[#404040] rounded-xl sm:w-full sm:h-48 sm:px-10 sm:justify-start">
        <p
          className={`bg-[#2196f3] text-white font-bold w-full flex justify-center rounded-t-md sm:px-[6.5rem]`}
        >
          {props.name}
        </p>
        <small className="text-[#B3B3B3]">{props.area}</small>
        <div className="flex flex-col items-center pm-2 pt-1 sm:pt-4">
          <div className="flex flex-col items-center">
            <div className="flex justify-between w-40 items-center">
              <small className="text-white flex items-center">
                <IoTimeSharp className="mx-1" />
                {props.startTime}
              </small>
              <small className="text-white flex items-center py-2">
                <BsFillPeopleFill className="mr-2" />
                {props.ocupation}/{props.capacity}
              </small>
            </div>
            <div className="flex items-center justify-center pt-1 pb-3">
              <small className="text-[#D4D4D4] font-semibold pr-2">
                {props.instructor}
              </small>
              <img
                className="w-7 h-8 rounded-full"
                src={props?.instructorPhoto}
                alt="foto do professor"
              />
            </div>
          </div>
          <div className="mb-2 sm:mt-3">
            <button
              className="bg-[#2196f3] text-white rounded-xl text-sm px-2 border-2
                    hover:bg-white hover:text-[#2196f3] hover:border-2 hover:border-[#2196f3]
                    "
            >
              Agendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
