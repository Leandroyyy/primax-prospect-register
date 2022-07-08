import { useEffect, useState } from "react"
import { evoApi } from "../../services/api"
import { Activity } from "../activity"

interface ActivityProps{
    idConfiguration:number
    name:string
    imageUrl:string
    area:string
    capacity:number
    ocupation:number
    startTime:string
    endTime:string
    instructor:string
    instructorPhoto:string
    activityDate:string
}

export function AllActivity(){

    const [activies, setActivies] = useState<ActivityProps[]>();

    useEffect(()=>{
        evoApi.get('/activities/schedule?idActivities=17', {
            headers: {
                username: "PRIMAXFITNESS",
                password: "0E2C8476-A2B2-44E2-B260-F35F24BC81CD",
                Authorization: "Basic UFJJTUFYRklUTkVTUzowRTJDODQ3Ni1BMkIyLTQ0RTItQjI2MC1GMzVGMjRCQzgxQ0Q=",
              },
        }).then((request) => setActivies(request.data))
    },[])

    const activity = activies?.map((activity)=>{
        return <Activity 
        name={activity.name}
        area={activity.area}
        activityDate={activity.activityDate}
        startTime={activity.startTime}
        capacity={activity.capacity}
        ocupation={activity.ocupation}
        instructor={activity.instructor}
        instructorPhoto={activity.instructorPhoto}
        />
    })

    return(
        <section className="overflow-scroll bg-[#323232] flex flex-col sm:flex-row">
            {activity}
        </section>
    )
}
