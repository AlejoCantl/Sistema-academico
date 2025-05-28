import { UserPen } from 'lucide-react';
import styles from './iconProfile.module.css';
import useToggleWithOutsideClick from './useToggleOutsideClick';
import NavigationOptions from './NavigationOptions';

export default function IconProfile(){
    const { ref: iconRef, isOpen: iconOpen, toggle: toggleIcon } = useToggleWithOutsideClick(false);

    return (
        <>
            <div className={styles.iconContainer} ref={iconRef} onClick={toggleIcon}>
                <UserPen className={styles.icon} />
            {iconOpen && (
                <div className={styles.iconMenu}>
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
        </>
    );
}

