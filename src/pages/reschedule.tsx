import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";



export default function Reschedule() {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 6, 5)); // July 5
  const [selectedTime, setSelectedTime] = useState("10:30 AM");

  // Available time slots
  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "1:00 PM"
  ];

  // Group time slots into columns
  const groupedTimeSlots = [];
  for (let i = 0; i < timeSlots.length; i += 3) {
    groupedTimeSlots.push(timeSlots.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col flex-1 w-full">
      {/* Header */}
      <AppHeader title="Reschedule Session" />

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-bold px-4 py-4">Select a new time</h3>

        {/* Calendar */}
        <div className="mx-4 mb-6">
          <Calendar
            mode="single"
            required={true}
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="w-full"
            
          />
        </div>

        {/* Time Slots */}
        <div className="px-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            {groupedTimeSlots.map((group, groupIndex) => (
              <div key={groupIndex} className="rounded-xl overflow-hidden shadow-sm">
                {group.map((time, timeIndex) => (
                  <button
                    key={timeIndex}
                    onClick={() => setSelectedTime(time)}
                    className={`w-full py-3 text-center text-sm font-medium transition-colors
                      ${selectedTime === time
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="p-4 border-t">
        <Button className="w-full">
          Request New Time
        </Button>
      </div>
    </div>
  );
}