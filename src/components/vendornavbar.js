import NavbarSearch from "./navbarsearch";
import styles from "./vendornavbar.module.css";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import Link from "next/link";

const VendorNavbar = props => {
  return (
    <div className={styles.vendorNavbar}>
      <div className={styles.navLeft}>
        <UilShoppingCartAlt className={styles.navIcon} />
        <h1 className={styles.navLogo}>
          Shopy<span>Vendor</span>
        </h1>
      </div>
      <NavbarSearch placeholder="Search Products" />
      <div className={styles.navRight}>
        <p className={props.currentPage == "home" ? styles.active : null}>
          <Link href="/vendor">Home</Link>
        </p>
        <p className={props.currentPage == "myorders" ? styles.active : null}>
          <Link href="/myorders">Orders</Link>
        </p>
        <p className={props.currentPage == "account" ? styles.active : null}>
          <Link href="/account"> Account</Link>
        </p>
        <p>Login</p>
      </div>
    </div>
  );
};

export default VendorNavbar;

// if (condition) do something else do something else

// condition ? do this : do this
