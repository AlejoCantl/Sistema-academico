import Calendar from "@/app/components/student/Calendar";
export default function EstudiantePage() {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "0.1rem",
          color: "#2E71BD",
        }}
      >
        Horario Academico
      </h2>
      <div
        style={{
          maxWidth: "100%",
          overflowX: "auto",
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        <Calendar />
      </div>
    </>
  );
}
