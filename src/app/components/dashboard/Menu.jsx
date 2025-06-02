import { Grip } from 'lucide-react';
import useToggleWithOutsideClick from './useToggleOutsideClick';
import styles from './menu.module.css';
import { usePathname } from 'next/navigation';
import NavigationOptions from './NavigationOptions';
export default function Menu() {
    const { ref: menuRef, isOpen: GridOpen, toggle: toggleGrid, close } = useToggleWithOutsideClick(false);
    const pathname = usePathname();
    const DashBoardView = pathname.split('/')[2];

    const NavigationOptionsMap ={
        "Student": [
            { href: '/Dashboard/Teacher', label: 'Clases asignadas', icon: null },
            { href: '/Dashboard/Coordinator', label: 'Materias', icon: null },
            { href: '/Dashboard/Asistencias', label: 'Asistencias', icon: null },

        ],
        "Admin": [
            { href: '/Dashboard/Admin', label: 'Administrador', icon: null },
            { href: '/Dashboard/Student', label: 'Estudiantes', icon: null },
            { href: '/Dashboard/Teacher', label: 'Clases asignadas', icon: null },
            { href: '/Dashboard/Coordinator', label: 'Materias', icon: null },
        ],
        "Teacher": [
            { href: '/Dashboard/Calificaciones', label: 'Calificaciones', icon: null },
        ],
        "Coordinator": [
            { href: '/Dashboard/Admin', label: 'Administrador', icon: null },
            { href: '/Dashboard/Student', label: 'Estudiantes', icon: null },
            { href: '/Dashboard/Teacher', label: 'Docentes', icon: null },
        ],
        "Calificaciones": [
            { href: '/Dashboard/Teacher', label: 'Docentes', icon: null },
        ],
        "Asistencias": [
            { href: '/Dashboard/Student', label: 'Estudiantes', icon: null },
        ],
    }

    return (
        <div className={styles.Container} ref={menuRef} onMouseLeave={close}>
            <div onMouseEnter={toggleGrid} className={`${styles.GridButton} ${GridOpen ? styles.active : ''}`}>
                <Grip className="h-6 w-6" />
            </div>

            {GridOpen && (
                <div className={styles.GridMenu}>
                    <NavigationOptions
                        options={NavigationOptionsMap[DashBoardView] || []}
                        classNameList={styles.MenuList}
                        classNameItem={styles.MenuItem}
                    />
                </div>
            )}

        </div>
    );
}