import { addDays, daysToWeeks, endOfWeek, format, getWeek } from "date-fns";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { evoApi } from "../../services/api";
import { Activity } from "../activity";
import { Loading } from "../loading";
import { evoUrl } from "../../auth/evoAuth";

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

export function ShowActivitiesMobile() {
  const formattedToday = format(addDays(new Date(), 1), "yyyy/MM/dd");
  const [showDay, setShowDay] = useState<string>(formattedToday);

  function handleDay(e: React.FormEvent<HTMLInputElement>) {
    const day = e.currentTarget.value;
    const plusDay = addDays(new Date(day), 1);
    setShowDay(format(new Date(plusDay), "yyyy/MM/dd"));
  }

  const formattedDay = format(new Date(showDay), "dd/MM/yyyy");

  const placeholderInputDate = format(new Date(showDay), "yyyy-MM-dd");

  if (new Date(formattedToday) > new Date(showDay)) {
    console.log("dia anterior");
  }

  if (addDays(new Date(formattedToday), 7) <= new Date(showDay)) {
    console.log("dias depois");
  }

  return (
    <>
      <div className="mt-5 py-2 bg-primaxBlue w-full flex flex-col items-center justify-center rounded-md">
        <h1>
          <strong className="text-white">Aulas do dia:</strong>
        </h1>
        <input
          type="date"
          id="chooseDay"
          className="rounded-md h-5 w-28"
          onChange={handleDay}
          defaultValue={placeholderInputDate}
        />
      </div>
      <ActivitiesMobile
        day={formattedDay}
        date={showDay}
        handleDay={handleDay}
      />
    </>
  );
}

function ActivitiesMobile(props: any) {
  const [activities, setActivities] = useState<ActivityScheduleProps[]>();
  const [showDay, setShowDay] = useState<string>(props.date);
  const [loading, isLoading] = useState<boolean>(false);

  useEffect(() => {
    setShowDay(props.date);
    evoUrl
      .get(`/activities/schedule?date=${showDay}&idActivities=17`)
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
      <ul>{showActivities}</ul>

      {loading ? <Loading /> : ""}
    </section>
  );
}
