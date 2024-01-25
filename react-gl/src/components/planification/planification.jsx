import "./planification.css"
import React, { useState } from 'react';
import Sidebar from "../compteavocat/sidebar";
const Planification = () => {
    const days = ['Samedi', 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
    const periods = ['8:00-9:00', '9:00-10:00', '10:00-11:00', '11:00-12:00', '13:00-14:00', '14:00-15:00', '15:00-16:00'];

    const [schedule, setSchedule] = useState(Array.from({ length: days.length }, () => Array(periods.length).fill(false)));

    const toggleAvailability = (dayIndex, periodIndex) => {
        const newSchedule = [...schedule];
        newSchedule[dayIndex][periodIndex] = !newSchedule[dayIndex][periodIndex];
        setSchedule(newSchedule);

        const isAvailable = newSchedule[dayIndex][periodIndex];
        console.log(`Day: ${days[dayIndex]}, Period: ${periods[periodIndex]}, Available: ${isAvailable}`);
    };

    return(
        <div className="planification">
            <Sidebar/>
            <div className="lawyer-schedule-container">
                <h1>Planification</h1>
                <table className="lawyer-schedule-table">
                    <thead>
                    <tr>
                        <th></th>
                        {periods.map((period, index) => (
                        <th key={index}>{period}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {days.map((day, dayIndex) => (
                        <tr key={dayIndex}>
                        <td>{day}</td>
                        {periods.map((period, periodIndex) => (
                            <td
                            key={periodIndex}
                            onClick={() => toggleAvailability(dayIndex, periodIndex)}
                            className={schedule[dayIndex][periodIndex] ? 'available-cell' : 'cell'}
                            >
                            {schedule[dayIndex][periodIndex] ? 'Available' : ''}
                            </td>
                        ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Planification;