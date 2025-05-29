import { UserPen } from 'lucide-react';
import styles from './iconProfile.module.css';
import useToggleWithOutsideClick from './useToggleOutsideClick';
import NavigationOptions from './NavigationOptions';
import Image from 'next/image';

export default function IconProfile({ userProfile }) {
    const { ref: iconRef, isOpen: iconOpen, toggle: toggleIcon } = useToggleWithOutsideClick(false);

    const imageUrl = userProfile?.image || userProfile?.photoURL;

    return (
        <div className={styles.iconContainer} ref={iconRef} onClick={toggleIcon}>
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt="User Profile"
                    width={40}
                    height={40}
                    className={styles.profileImage}
                />
            ) : (
                <UserPen className={styles.icon} />
            )}
            
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
    );
}
