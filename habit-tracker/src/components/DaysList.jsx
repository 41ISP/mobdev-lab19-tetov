import { useEffect, useState } from "react"
import { getObject } from "../utils/storage"
import { checkCompleted, daysSince, formatDateShort, mapDays } from "../utils/utils"
import { TimeLineItem } from "./TimeLineItem"

const DaysList = ({id}) => {
    
const [habit, setHabit] = useState(undefined)
   const days = habit && daysSince(habit.startDate)
   const daysList = mapDays
    console.log(days)
    useEffect(() => {
const getHabit = async () =>{
const habits = await getObject("habits")
            setHabit(habits.find((el) => el.id == id))  
}
getHabit()
    },
[])
    return(
       
                    <div class="list-view">
                       {habit && mapDays(habit.startDate, (el)=> <TimeLineItem day = {el.toLocaleDateString("en-US", {weekday:"long"})}date = {formatDateShort(el)}
                       completed = {checkCompleted(el, habit.history)}/>)}
                            </div>
    )
}
export default DaysList