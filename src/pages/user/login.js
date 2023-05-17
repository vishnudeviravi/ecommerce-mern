import styles from "@/styles/userlogin.module.css";
import Input from "@/components/input";
import Button from "@/components/button";

const UserLogin = () => {
  return (
    <div className={styles.userLogin}>
      <h1 className={styles.heading}>Shopy</h1>
      <h2 className={styles.heading}>User Login</h2>
      <Input type="text" placeholder="eg: 8484949399" label="Phone Number" />
      <Input type="password" placeholder="*********" label="Password" />
      <Button name="Login" />
    </div>
  );
};

export default UserLogin;
