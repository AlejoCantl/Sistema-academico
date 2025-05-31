import Calendar from "@/app/components/teacher/Calendar";
const data = [
          {
            title: 'ACTIVIDAD DE INICIO DE CLASES',
            start: '2025-05-02T00:00:00',
            end: '2025-05-03T12:59:59',
          },
          {
            title: 'Avance del syllabus',
            start: '2025-05-14T17:00:00',
            end: '2025-05-15T20:59:59',
          },
          {
            title: 'Avance del diseño',
            start: '2025-05-28T00:00:00',
            end: '2025-05-29T23:59:59',
          },
          {
            title: 'Prueba de avance',
            start: '2025-05-30T00:00:00',
            end: '2025-05-31T08:59:59',
          },
        ]

export default function DocentePage() {
    return (
      <>
      <h2 style={{ textAlign: 'center', marginBottom: '0.1rem' }}>Clases asignadas</h2>
      <div style={{
      maxWidth: '100%',
      overflowX: 'auto',
      padding: '1rem',
      boxSizing: 'border-box',}}>
               <Calendar eventsData={data}/>
      </div>
      </>
    );
  }
  