import { addDays, daysToWeeks, endOfWeek, format, getWeek } from "date-fns";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { evoApi } from "../../services/api";
import { Activity } from "../activity";
import { Loading } from "../loading";

interface ActivityScheduleProps {
  idConfiguration: number;
  name: string;
  imageUrl: string;
  area: string;
  capacity: number;
  ocupation: number;
  startTime: string;
  endTime: string;
  instructor: string;
  instructorPhoto: string;
  activityDate: string;
}

// interface ActivityProps {
//     idActivity:number
//     photo:string
//     name:string
//     color:string
//     activityGroup:string
//     totalRecords:number
// }

export function SelectCalendar() {

  const formattedToday = format(new Date(), "yyyy/MM/dd")
  const [showDay, setShowDay] = useState<string>(formattedToday);

  function handleDay(e: React.FormEvent<HTMLInputElement>) {
    const day = e.currentTarget.value;

    const plusDay = addDays(new Date(day), 1);

    setShowDay(format(new Date(plusDay), "yyyy/MM/dd"));
  }

  const formattedDay = format(new Date(showDay), 'dd/MM/yyyy')

  return (
    <>
      <AllActivityMobile
        day={formattedDay}
        date={showDay}
        handleDay={handleDay}
      />
    </>
  );
}

function AllActivityMobile(props: any) {
  const [activities, setActivities] = useState<ActivityScheduleProps[]>();
  const [showDay, setShowDay] = useState<string>(props.date);
  const [loading, isLoading] = useState<boolean>(false);

  useEffect(() => {
    setShowDay(props.date);
     evoApi
      .get(`/activities/schedule?date=${showDay}&idActivities=17`, {
        headers: {
          username: "PRIMAXFITNESS",
          password: "0E2C8476-A2B2-44E2-B260-F35F24BC81CD",
          Authorization:
            "Basic UFJJTUFYRklUTkVTUzowRTJDODQ3Ni1BMkIyLTQ0RTItQjI2MC1GMzVGMjRCQzgxQ0Q=",
        },
      })
      .then((request) => setActivities(request.data));
  }, [showDay, props]);

  const showActivities = activities?.map((activity) => {
    
    if (activity.ocupation == activity.capacity) {
      return;
    }

    if (activity.instructor == "SEM AULA") {
      return;
    }

    return (
      <Activity
        key={activity.idConfiguration}
        name={activity.name}
        area={activity.area}
        startTime={activity.startTime}
        capacity={activity.capacity}
        ocupation={activity.ocupation}
        instructor={activity.instructor}
        instructorPhoto={activity?.instructorPhoto}
        activityDate={props.day}
      />
    );
  });

  return (
    <section
      className="h-[86vh] overflow-x-scroll bg-[#313131] flex flex-col items-center sm:flex-row 
        scrollbar-thumb-primaxBlue scrollbar-thin"
    >
      <div className="my-10 py-2 bg-primaxBlue w-full flex flex-col items-center justify-center rounded-md">
        <h1><strong className="text-white">Aulas do dia:</strong></h1>
        <input
          type="date"
          id="chooseDay"
          className="rounded-md h-5 w-28"
          onChange={props.handleDay}
          defaultValue='2022-07-24'
        />
      </div>
      <ul>
        {showActivities}
      </ul>

      {loading ? (
        <Loading/>
      ) : (
        ""
      )}
    </section>
  );
}
