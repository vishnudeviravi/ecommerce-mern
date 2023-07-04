import styles from "@/styles/userlogin.module.css";
import Input from "@/components/input";
import Button from "@/components/button";
import { useRef, useEffect, useState } from "react";
import instance from "../../utils/axios";
import { setToken, setUser } from "../../utils";
import { useRouter } from "next/router";

const UserLogin = () => {
  const router = useRouter();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const buttonRef = useRef();

  const [loginData, setLoginData] = useState({ username: "", password: "" });

  useEffect(() => {
    usernameRef.current.focus(); // for focusing on the input tag
  }, []);

  const onKeyDown = (e, field) => {
    if (e.key == "Enter" && field == "username") {
      passwordRef.current.focus();
    } else if (e.key == "Enter" && field == "password") {
      buttonRef.current.click();
      buttonRef.current.focus();
    }
  };

  const onClick = async () => {
    try {
      const loginValue = await instance.post("/login", loginData);
      setToken(loginValue.data.token);
      setUser(loginValue.data.userId);
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  const onChange = (e, key) => {
    setLoginData({ ...loginData, [key]: e.target.value });
  };

  return (
    <div className={styles.userLogin}>
      <h1 className={styles.heading}>Shopy</h1>
      <h2 className={styles.heading}>User Login</h2>
      <Input
        reference={usernameRef}
        type="text"
        placeholder="eg: abced1200"
        label="Username"
        onKeyDown={e => onKeyDown(e, "username")}
        onChange={e => onChange(e, "username")}
      />
      <Input
        reference={passwordRef}
        type="password"
        placeholder="*********"
        label="Password"
        onKeyDown={e => onKeyDown(e, "password")}
        onChange={e => onChange(e, "password")}
      />
      <Button onClick={onClick} reference={buttonRef} name="Login" />
    </div>
  );
};

export default UserLogin;
