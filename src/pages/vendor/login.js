import styles from "@/styles/vendorlogin.module.css";
import Input from "@/components/input";
import Button from "@/components/button";

const VendorLogin = () => {
  return (
    <div className={styles.vendorLogin}>
      <h1 className={styles.heading}>Shopy Login</h1>
      <Input type="text" placeholder="eg: 8484949399" label="Phone Number" />
      <Input type="password" placeholder="*********" label="Password" />
      <Button name="Login" />
    </div>
  );
};

export default VendorLogin;
