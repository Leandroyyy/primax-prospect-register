import { useEffect, useState } from "react"
import { evoApi } from "../../services/api"
import { Activity } from "../activity"

interface ActivityScheduleProps{
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

// interface ActivityProps {
//     idActivity:number
//     photo:string
//     name:string
//     color:string
//     activityGroup:string
//     totalRecords:number
// }

export function AllActivity(){

    const [activies, setActivies] = useState<ActivityScheduleProps[]>();

    useEffect(()=>{
        evoApi.get('/activities/schedule?idActivities=17', {
            headers: {
                username: "PRIMAXFITNESS",
                password: "0E2C8476-A2B2-44E2-B260-F35F24BC81CD",
                Authorization: "Basic UFJJTUFYRklUTkVTUzowRTJDODQ3Ni1BMkIyLTQ0RTItQjI2MC1GMzVGMjRCQzgxQ0Q=",
              },
        }).then((request) => setActivies(request.data))
    },[])

    const showActivities = activies?.map((activity)=>{

        if(activity.ocupation == activity.capacity){
            return
        }

        
        // realizar metodo post para verificar se é possivel agendar nessa atividade

        return <Activity key={activity.idConfiguration}
        name={activity.name}
        area={activity.area}
        activityDate={activity.activityDate}
        startTime={activity.startTime}
        capacity={activity.capacity}
        ocupation={activity.ocupation}
        instructor={activity.instructor}
        instructorPhoto={activity?.instructorPhoto}
        />
    })

    return(
        <section className="h-[86vh] overflow-x-scroll bg-[#323232] flex flex-col items-center sm:flex-row 
        scrollbar-thumb-blue-400 scrollbar-thin">

            {showActivities}
        </section>
    )
}
