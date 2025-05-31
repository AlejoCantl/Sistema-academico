'use client';
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import styles from "./calendar.module.css";

import EventModal from "./EventModal";

const Calendar = ({ eventsData }) => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        setEvents(eventsData);
    }, [eventsData]);

    const handleEventClick = (info) => {
        setSelectedEvent({
            title: info.event.title,
            start: info.event.startStr,
            end: info.event.endStr,
            extendedProps: info.event.extendedProps,
        });
    };

    const closeModal = () => {
        setSelectedEvent(null);
    };

    return (
        <div className={styles.calendarWrapper}>
            <div className={styles.calendarInner}>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    events={events}
                    locale="es"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth timeGridWeek,timeGridDay',
                    }}
                    height="auto"
                    eventClick={handleEventClick}
                    eventContent={renderEventContent}
                    eventMouseEnter={(info) => {
                        info.el.style.cursor = 'pointer';
                    }}
                    eventMouseLeave={(info) => {
                        info.el.style.cursor = 'default';
                    }}
                />
            </div>

            <EventModal event={selectedEvent} onClose={closeModal} />
        </div>
    );
};

const renderEventContent = (eventInfo) => (
    <div>
        <b>{eventInfo.timeText}</b> <i>{eventInfo.event.title}</i>
    </div>
);

export default Calendar;
