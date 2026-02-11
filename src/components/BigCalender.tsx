"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "moment/locale/uz";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

moment.locale("uz");
const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
      messages={{
        today: "Bugun",
        previous: "Oldingi",
        next: "Keyingi",
        month: "Oy",
        week: "Hafta",
        day: "Kun",
        agenda: "Reja",
        date: "Sana",
        time: "Vaqt",
        event: "Tadbir",
        noEventsInRange: "Ko'rsatiladigan tadbirlar yo'q.",
        work_week: "Ish haftasi",
      }}
    />
  );
};

export default BigCalendar;
