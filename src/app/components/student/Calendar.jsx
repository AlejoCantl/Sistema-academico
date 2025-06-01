"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import styles from "./calendar.module.css"

export default function Calendar() {
  return (
    <div className={styles.calendarWrapper}>
        <div className={styles.calendarInner}>
            {/* Calendario */}
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                selectable={true}
                locale="es"
                headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth timeGridWeek,timeGridDay',
                    }}
                // events={[
                //   { title: "Examen de Matemáticas", date: "2025-06-05" },
                //   { title: "Entrega de Proyecto", date: "2025-06-10" }
                // ]}
            />
        </div>
    </div>
  );
}
