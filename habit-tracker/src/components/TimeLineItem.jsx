export const TimeLineItem = ({day, date, completed, completionTime}) => {
return (

<div class="timeline-item">
                            <div class="timeline-date">
                                <div class="timeline-date-day">{day}</div>
                                <div class="timeline-date-full">
                                    {date} 
                                </div>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-status">
                                    <div class={`status-icon${completed ? "completed" : ""}`}>{completed ? "😏" : "😛"}</div>
                                    <div>
                                        <div class={`status-text${completed ? "Completed" : ""}`}>
                                            {completed ? "Completed" : "Missed"}
                                        </div>
                                        <div class="timeline-note">
                                            Completed at {completionTime} 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
)
}