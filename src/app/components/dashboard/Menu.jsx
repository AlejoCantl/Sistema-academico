import { Grip } from 'lucide-react';
import useToggleWithOutsideClick from './useToggleOutsideClick';
import styles from './menu.module.css';
import NavigationOptions from './NavigationOptions';
export default function Menu() {
    const { ref: menuRef, isOpen: GridOpen, toggle: toggleGrid } = useToggleWithOutsideClick(false);


    return (
        <div className={styles.Container} ref={menuRef}>
            <div onClick={toggleGrid} className={`${styles.GridButton} ${GridOpen ? styles.active : ''}`}>
                <Grip className="h-6 w-6" />
            </div>

            {GridOpen && (
                <div className={styles.GridMenu}>
                    <NavigationOptions
                        options={[
                            { href: '/Dashboard/Student', label: 'Estudiantes', icon: null },
                            { href: '/Dashboard/Admin', label: 'Administrador', icon: null },
                            { href: '/Dashboard/Teacher', label: 'Docentes', icon: null },
                            { href: '/Dashboard/Coordinator', label: 'Materias', icon: null },
                        ]}
                        classNameList={styles.MenuList}
                        classNameItem={styles.MenuItem}
                    />
                </div>
            )}

        </div>
    );
}