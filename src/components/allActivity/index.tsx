import { useState } from "react"
import { evoApi } from "../../services/api"

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

    async function getAllActivties(){
        await evoApi.get('/activities/schedule?idActivities=17', {
            headers: {
                username: "PRIMAXFITNESS",
                password: "0E2C8476-A2B2-44E2-B260-F35F24BC81CD",
                Authorization: "Basic UFJJTUFYRklUTkVTUzowRTJDODQ3Ni1BMkIyLTQ0RTItQjI2MC1GMzVGMjRCQzgxQ0Q=",
              },
        }).then((request) => setActivies(request?.data))
    }


    console.log(activies? activies.map((activity) => {
        console.log(activity.instructor,activity.startTime)
    }) : "");

    return(
        <section>
            <button onClick={getAllActivties}>puxar lista</button>
        </section>
    )
}