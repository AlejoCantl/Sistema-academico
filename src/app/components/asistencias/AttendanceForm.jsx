"use client";
import { useState } from "react";
import styles from './attendance.module.css'

export default function AttendanceForm({ onSearch }) {
    const [fecha, setFecha] = useState("");
    const [materia, setMateria] = useState("");

    const handleSearch = () => {
        onSearch(fecha, materia);
    };

    return (
        <div className={styles.contenedorInputs}>
            <div className={styles.contenedorFecha}>
                <label>Fecha:</label>
                <input type="date" className={styles.inputField} value={fecha} onChange={(e) => setFecha(e.target.value)} />
            </div>

            <div className={styles.contenedorMaterias}>
                <label>Materia:</label>
                <select className={styles.inputField} value={materia} onChange={(e) => setMateria(e.target.value)}>
                    <option value="">Selecciona una materia</option>
                    <option value="Matemáticas">Matemáticas</option>
                    <option value="Historia">Historia</option>
                </select>
            </div>

            <button className={styles.buttonStyle} onClick={handleSearch}>Buscar</button>
        </div>
    );
}
