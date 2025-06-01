"use client";
import { useState } from "react";
import AttendanceForm from "@/app/components/asistencias/AttendanceForm";
import AttendanceTable from "@/app/components/asistencias/AttendanceTable";
import styles from "@/app/components/asistencias/attendance.module.css";

export default function AsistenciasPage() {
    const [asistencias, setAsistencias] = useState([]);

    const handleSearch = (fecha, materia) => {
        const dataFake = [
            { fecha: "2025-06-01", materia: "Matemáticas", estudiante: "Juan Pérez", asistencia: "Presente" },
            { fecha: "2025-06-02", materia: "Historia", estudiante: "Maria González", asistencia: "Ausente" },
            { fecha: "2025-06-01", materia: "Matemáticas", estudiante: "Carlos Díaz", asistencia: "Presente" },
        ];

        const filtrados = dataFake.filter(item => item.fecha === fecha && item.materia === materia);
        setAsistencias(filtrados);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Asistencias</h2>
            <p className={styles.description}>Consultar registros de asistencia por materia y fecha</p>
            <div className={styles.formContainer}>
                <AttendanceForm onSearch={handleSearch} />
            </div>
            {asistencias.length > 0 && (
                <div className={styles.tableContainer}>
                    <AttendanceTable asistencias={asistencias} />
                </div>
            )}
        </div>
    );
}