import styles from "./attendance.module.css";

export default function AttendanceTable({ asistencias }) {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.attendanceTable}>
                <thead>
                    <tr>
                        <th className={styles.tableHeader}>Fecha</th>
                        <th className={styles.tableHeader}>Materia</th>
                        <th className={styles.tableHeader}>Estudiante</th>
                        <th className={styles.tableHeader}>Asistencia</th>
                    </tr>
                </thead>
                <tbody>
                    {asistencias.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.tableCell}>{item.fecha}</td>
                            <td className={styles.tableCell}>{item.materia}</td>
                            <td className={styles.tableCell}>{item.estudiante}</td>
                            <td className={styles.tableCell}>{item.asistencia}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

