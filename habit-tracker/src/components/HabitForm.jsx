const HabitForm = () => {
    return (
        <div className="add-habit-section">
            <h2>➕ Add New Habit</h2>
            <form className="form-grid">
                <div className="form-group">
                    <label for="habit-name">Habit Name</label>
                    <input
                        type="text"
                        id="habit-name"
                        name="habitName"
                        placeholder="e.g., Morning Exercise"
                        value="" />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label for="frequency">Frequency</label>
                        <select id="frequency" name="frequency">
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="weekdays">Weekdays</option>
                            <option value="weekdends">Weekends</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label for="notification-time">
                            Notification Time
                        </label>
                        <input
                            type="time"
                            name="notificationTime"
                            id="notification-time"
                            value="07:00" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Color Theme</label>
                    <div className="color-picker">
                        <div
                        ></div>
                        <div
                            className="color-option"
                        ></div>
                        <div
                            className="color-option"
                        ></div>
                        <div
                            className="color-option"
                        ></div>
                        <div
                            className="color-option"
                        ></div>
                        <div
                            className="color-option"
                        ></div>
                    </div>
                </div>

                <button type="button" className="btn btn-primary">
                    Add Habit
                </button>
            </form>
        </div>
    )
}

export default HabitForm