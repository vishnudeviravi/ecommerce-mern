import styles from "./navbarsearch.module.css";
import { UilSearch } from "@iconscout/react-unicons";

const NavbarSearch = props => {
  return (
    <div className={styles.navbarSearch}>
      <input
        className={styles.navbarSearchInput}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
      <UilSearch className={styles.navbarSearchIcon} />
    </div>
  );
};

export default NavbarSearch;
