import styles from "@/styles/userregister.module.css";
import Input from "@/components/input";
import Button from "@/components/button";

const UserRegister = () => {
  return (
    <div className={styles.userRegister}>
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

export default UserRegister;
