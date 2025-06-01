"use client";
import Menu from "./Menu";
import IconProfile from "./IconProfile";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import styles from './dashboardHeader.module.css';
export default function DashboardHeader() {
    const pathname = usePathname();
    const DashBoardView = pathname.split('/')[2];

    const [userProfile, setUserProfile] = useState({});

    useEffect(() => {
        // insertamos un perfil de usuario de prueba en localStorage
        localStorage.setItem('userProfile', JSON.stringify({
            name: "Prueba Dev",
            role: "Admin",
            image: "https://i.pravatar.cc/150?img=4"
        }));
        // Verifica si el perfil del usuario está en localStorage
        const storedProfile = localStorage.getItem('userProfile');
        if (storedProfile) {
            setUserProfile(JSON.parse(storedProfile));
        } else {
            setUserProfile({});
            console.warn("No se enconctro perfil de usuario en localStorage");
        }
    }, []);

    const DashBoardViewMap = {
        "Student": "Estudiantes",
        "Admin": "Administrador",
        "Teacher": "Docente",
        "Coordinator": "Coordinador",
        "Calificaciones": "Calificaciones",
        "Asistencias": "Asistencias",
    }
    // Si el DashBoardView no está en el mapa, se puede manejar como un caso especial
    if (!DashBoardViewMap[DashBoardView]) {
        return <h1 className={styles.dashTitle}>Vista no encontrada</h1>;
    }

    return (
        <div className={styles.dashContainer}>
            <Menu/>
            <h1 className={styles.dashTitle}>{`Dashboard ${DashBoardViewMap[DashBoardView]}`}</h1>
            <IconProfile userProfile={userProfile}/>
        </div>
    );
}