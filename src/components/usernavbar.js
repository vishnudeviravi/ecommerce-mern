import NavbarSearch from "./navbarsearch";
import styles from "./usernavbar.module.css";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import Link from "next/link";
import { getToken, removeToken, removeUser } from "../utils";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const UserNavbar = props => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setToken(getToken());
  }, []);

  const logout = () => {
    removeToken();
    removeUser();
    router.push("/user/login");
  };

  const onChange = e => {
    setSearch(e.target.value);
  };

  const onKeyDown = e => {
    if (e.key == "Enter") {
      router.push(`/products?search=${search}`);
    }
  };

  return (
    <div className={styles.userNavbar}>
      <div className={styles.navLeft}>
        <UilShoppingCartAlt className={styles.navIcon} />
        <h1 className={styles.navLogo}>Shopy</h1>
      </div>
      <NavbarSearch
        placeholder="Search Products"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <div className={styles.navRight}>
        <p className={props.currentPage == "home" ? styles.active : null}>
          <Link href="/">Home</Link>
        </p>
        <p className={props.currentPage == "myorders" ? styles.active : null}>
          <Link href="/myorders">My Orders</Link>
        </p>
        <p className={props.currentPage == "cart" ? styles.active : null}>
          <Link href="/cart"> Cart</Link>
        </p>
        <p className={props.currentPage == "account" ? styles.active : null}>
          <Link href="/account"> Account</Link>
        </p>
        <p>
          {token ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link href="/user/login">Login</Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default UserNavbar;

// if (condition) do something else do something else

// condition ? do this : do this
