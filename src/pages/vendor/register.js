import styles from "@/styles/vendorregister.module.css";
import Input from "@/components/input";
import Button from "@/components/button";

const VendorRegister = () => {
  return (
    <div className={styles.vendorRegister}>
      <h1 className={styles.heading}>Shopy Register</h1>
      <Input type="text" placeholder="eg: 8484949399" label="Phone Number" />
      <Input type="text" placeholder="example@mail.com" label="Email" />
      <Input
        type="text"
        placeholder="House No building city"
        label="Current address"
      />
      <Input type="password" placeholder="*********" label="Password" />
      <Button name="Register" />
    </div>
  );
};

export default VendorRegister;
