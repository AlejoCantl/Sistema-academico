import { UserPen } from 'lucide-react';
import styles from './iconProfile.module.css';
import useToggleWithOutsideClick from './useToggleOutsideClick';
import NavigationOptions from './NavigationOptions';
import Image from 'next/image';

export default function IconProfile( ) {
    const { ref: iconRef, isOpen: iconOpen, toggle: toggleIcon } = useToggleWithOutsideClick(false);

    const imageUrl = 'imagenes/perfil.png';

    return (
        <div className={styles.iconContainer} ref={iconRef} onMouseEnter={toggleIcon} onMouseLeave={toggleIcon}>
            {imageUrl ? (
                <Image
                    src="/imagenes/perfil.png"
                    alt="User Profile"
                    width={70}
                    height={100}
                    className={styles.profileImage}
                />
            ) : (
                <UserPen className={styles.icon} />
            )}
            
            {iconOpen && (
                <div className={styles.iconMenu}>
                    <NavigationOptions
                        options={[
                            { href: '/', label: 'Salir', icon: null },
                            
                        ]}
                        classNameList={styles.MenuList}
                        classNameItem={styles.MenuItem}
                    />
                </div>
            )}
        </div>
    );
}
