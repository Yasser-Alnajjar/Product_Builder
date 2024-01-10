import styles from "./Navbar.module.scss";
interface IProps {
  name: string;
  path: string;
}
export default function Navbar({ name, path }: IProps) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_nav_list}>
        <li className={styles.navbar_nav_list_item}>
          <a className={styles.navbar_nav_list_item_link} href="#">
            Home
          </a>
        </li>
        <li className={styles.navbar_nav_list_item}>
          <a className={styles.navbar_nav_list_item_link} href="#">
            About
          </a>
        </li>
        <li className={styles.navbar_nav_list_item}>
          <a className={styles.navbar_nav_list_item_link} href={path}>
            {name}
          </a>
        </li>
      </ul>
    </nav>
  );
}
