"use client";
import Menu from "./Menu";
import IconProfile from "./IconProfile";
import { usePathname } from 'next/navigation';
import styles from './dashboardHeader.module.css';
export default function DashboardHeader() {
    const pathname = usePathname();
    const DashBoardView = pathname.split('/')[2];

    const DashBoardViewMap = {
        "Student": "Estudiantes",
        "Admin": "Administrador",
        "Teacher": "Docente",
        "Coordinator": "Coordinador",
    }
    // Si el DashBoardView no está en el mapa, se puede manejar como un caso especial
    if (!DashBoardViewMap[DashBoardView]) {
        return <h1 className={styles.dashTitle}>Vista no encontrada</h1>;
    }

    return (
        <div className={styles.dashContainer}>
            <Menu/>
            <h1 className={styles.dashTitle}>{`Dashboard ${DashBoardViewMap[DashBoardView]}`}</h1>
            <IconProfile/>
        </div>
    );
}