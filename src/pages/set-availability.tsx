import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import AppHeader from "@/components/app-header";

export default function SetAvailability() {
  // State for selected dates in July and August
  const [julyDates, setJulyDates] = useState<Date[]>([]);
  const [augustDates, setAugustDates] = useState<Date[]>([]);
  // State for current month view: 0 = July, 1 = August
  const [monthIndex, setMonthIndex] = useState(0);

  // Month/year data
  const months = [
    { label: "July 2024", month: 6, year: 2024, dates: julyDates, setDates: setJulyDates },
    { label: "August 2024", month: 7, year: 2024, dates: augustDates, setDates: setAugustDates },
  ];
  const current = months[monthIndex];

  // Handler for selecting dates
  function handleSelect(dates: Date[] | undefined) {
    current.setDates(dates || []);
  }

  // Handler for saving availability
  function handleSave() {
    // You can send julyDates and augustDates to your API here
    alert(
      `July: ${julyDates.map(d => format(d, 'yyyy-MM-dd')).join(', ')}\nAugust: ${augustDates.map(d => format(d, 'yyyy-MM-dd')).join(', ')}`
    );
  }

  return (
    <div className="flex flex-col w-full flex-1">
      <AppHeader title="Set Availability" />
      <div className="flex flex-col gap-6 p-4 justify-center items-center">
        <div className="min-w-[280px] max-w-[336px] w-full">
          <div className="flex items-center justify-between p-1 mb-2">
            <Button variant="ghost" size="icon" onClick={() => setMonthIndex(i => Math.max(0, i - 1))} disabled={monthIndex === 0}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h3 className="text-base font-bold">{current.label}</h3>
            <Button variant="ghost" size="icon" onClick={() => setMonthIndex(i => Math.min(months.length - 1, i + 1))} disabled={monthIndex === months.length - 1}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Calendar
            mode="multiple"
            selected={current.dates}
            onSelect={handleSelect}
            className="rounded-md border w-full"
            classNames={{
              head_cell: "h-12 w-full flex items-center justify-center text-[13px] font-bold pb-0.5",
              cell: "h-12 w-full p-0 relative",
              day: "h-12 w-full flex items-center justify-center text-sm font-medium",
            }}
          />
        </div>
        <Button className="w-full max-w-xs" onClick={handleSave}>Save Availability</Button>
      </div>
    </div>
  );
}