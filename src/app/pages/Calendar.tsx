import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { format, addDays, startOfWeek, isSameDay } from "date-fns";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }).map((_, i) =>
    addDays(startDate, i),
  );

  const hours = Array.from({ length: 11 }).map((_, i) => i + 8); // 8 AM to 6 PM

  const events = [
    {
      id: 1,
      title: "Haircut - Sarah J.",
      day: 1,
      start: 9,
      duration: 1,
      color: "bg-blue-100 border-blue-200 text-blue-800",
    },
    {
      id: 2,
      title: "Massage - Mike C.",
      day: 2,
      start: 10.5,
      duration: 1.5,
      color: "bg-purple-100 border-purple-200 text-purple-800",
    },
    {
      id: 3,
      title: "Consultation - Emma W.",
      day: 4,
      start: 14,
      duration: 0.5,
      color: "bg-emerald-100 border-emerald-200 text-emerald-800",
    },
    {
      id: 4,
      title: "Coloring - Olivia D.",
      day: 5,
      start: 15,
      duration: 2,
      color: "bg-amber-100 border-amber-200 text-amber-800",
    },
  ];

  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Calendar
          </h1>
          <p className="text-gray-500 mt-1">
            Manage staff availability and bookings.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white rounded-xl border border-gray-200 p-1 shadow-sm">
            <button className="px-3 py-1.5 text-sm font-medium rounded-lg hover:bg-gray-50">
              Day
            </button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 shadow-sm">
              Week
            </button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-lg hover:bg-gray-50">
              Month
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
            <Plus size={16} />
            New Booking
          </button>
        </div>
      </header>

      <div className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
        {/* Calendar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">
              {format(currentDate, "MMMM yyyy")}
            </h2>
            <div className="flex items-center gap-1">
              <button
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setCurrentDate(addDays(currentDate, -7))}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="px-3 py-1.5 text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setCurrentDate(new Date())}
              >
                Today
              </button>
              <button
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setCurrentDate(addDays(currentDate, 7))}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-black/5">
              <option>All Staff</option>
              <option>Sarah Jenkins</option>
              <option>Michael Chen</option>
            </select>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 overflow-auto flex">
          {/* Time Column */}
          <div className="w-20 flex-shrink-0 border-r border-gray-100 bg-gray-50/50">
            <div className="h-12 border-b border-gray-100" />{" "}
            {/* Header spacer */}
            {hours.map((hour) => (
              <div
                key={hour}
                className="h-20 border-b border-gray-100 relative"
              >
                <span className="absolute -top-3 right-2 text-xs text-gray-400 font-medium">
                  {hour === 12
                    ? "12 PM"
                    : hour > 12
                      ? `${hour - 12} PM`
                      : `${hour} AM`}
                </span>
              </div>
            ))}
          </div>

          {/* Days Columns */}
          <div className="flex-1 flex min-w-[800px]">
            {weekDays.map((day, dayIdx) => {
              const isToday = isSameDay(day, new Date());
              return (
                <div
                  key={day.toString()}
                  className="flex-1 border-r border-gray-100 relative"
                >
                  {/* Day Header */}
                  <div
                    className={`h-12 border-b border-gray-100 flex flex-col items-center justify-center ${isToday ? "bg-blue-50/50" : ""}`}
                  >
                    <span
                      className={`text-xs font-medium uppercase ${isToday ? "text-blue-600" : "text-gray-500"}`}
                    >
                      {format(day, "EEE")}
                    </span>
                    <span
                      className={`text-lg font-semibold ${isToday ? "text-blue-600" : "text-gray-900"}`}
                    >
                      {format(day, "d")}
                    </span>
                  </div>

                  {/* Time Slots */}
                  <div className="relative">
                    {hours.map((hour) => (
                      <div
                        key={hour}
                        className="h-20 border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer"
                      />
                    ))}

                    {/* Events */}
                    {events
                      .filter((e) => e.day === dayIdx)
                      .map((event) => (
                        <div
                          key={event.id}
                          className={`absolute left-1 right-1 rounded-lg border p-2 shadow-sm ${event.color} cursor-pointer hover:opacity-90 transition-opacity`}
                          style={{
                            top: `${(event.start - 8) * 5}rem`, // 5rem = h-20
                            height: `${event.duration * 5}rem`,
                          }}
                        >
                          <p className="text-xs font-semibold truncate">
                            {event.title}
                          </p>
                          <p className="text-[10px] opacity-80 mt-0.5">
                            {event.start > 12 ? event.start - 12 : event.start}:
                            {(event.start % 1) * 60 || "00"} -
                            {event.start + event.duration > 12
                              ? event.start + event.duration - 12
                              : event.start + event.duration}
                            :{(event.start + (event.duration % 1)) * 60 || "00"}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
