const HabitCard = ({name, notificationTime, frequency, color, isToday, streak, toggleToday}) => {
    return (
        <div className="habit-card">
                    <div className="habit-info">
                        <div className="habit-name">{name}</div>
                        <div className="habit-meta">
                            <div className="habit-meta-item">
                                <span>⏰</span>
                                <span>{notificationTime}</span>
                            </div>
                            <div className="habit-meta-item">
                                <span>📅</span>
                                <span>{frequency}</span>
                            </div>
                        </div>
                    </div>
                    <div className="habit-actions">
                        <div className="streak-badge">🔥 {streak} days</div>
                        <button onClick={toggleToday} className={`check-btn${isToday ? " completed" : ""}`}>{isToday ? "✓" : "○"}</button>
                    </div>
                </div>
    )
}

export default HabitCard