import { NavLink } from '../../../hooks/hooks';

import { IHeaderProps } from './types';

// import computer from '../../../assets/header/computer-screen-with-windows-logo-svgrepo-com.svg';
import { Menu } from '../menu/menu';

import styles from './header.module.scss';
import { useToggleTheme } from '../../../hooks/useTheme/useTheme';

const Header: React.FC<IHeaderProps> = ({ user, logOut }) => {
  const { toggleTheme, theme } = useToggleTheme();
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <NavLink
          data-testid="header-logo"
          to="/"
          className={styles.header__logo}
        >
          {/* <img src={computer} alt="computer" width={40} height={40} /> */}
          Best Courses
        </NavLink>
        <div className={styles["menu-wrapper"]}>
          <button onClick={toggleTheme} className={styles.button}>
            {theme}
          </button>
          <Menu user={user} logOut={logOut} />
        </div>
      </div>
    </header>
  );
};

export { Header };
