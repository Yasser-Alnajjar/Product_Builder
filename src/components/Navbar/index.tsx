import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} bg-indigo-700`}>
      <ul className={styles.navbar_nav_list}>
        <li className={styles.navbar_nav_list_item}>
          <a className={styles.navbar_nav_list_item_link} href={"/"}>
            Home
          </a>
        </li>
        <li className={styles.navbar_nav_list_item}>
          <a className={styles.navbar_nav_list_item_link} href={"/"}>
            About
          </a>
        </li>
        <li className={styles.navbar_nav_list_item}>
          <a className={styles.navbar_nav_list_item_link} href={"/"}>
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
