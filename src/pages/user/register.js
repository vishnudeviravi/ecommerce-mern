import styles from "@/styles/userregister.module.css";
import Input from "@/components/input";
import Button from "@/components/button";
import {useState} from 'react';
import instance from '../../utils/axios'

const UserRegister = () => {

  const [userForm,setUserForm] = useState({name:"",username:"",email:"",role:"user",password:"",confirmPassword:""})

  const onChange =(e,key)=>{
    setUserForm({...userForm,[key]:e.target.value})
  }

  const onClick =async()=>{
   const postResult = await instance.post('/sign-up',userForm)
   console.log(postResult)
  }


  console.log(userForm)


  return (
    <div className={styles.userRegister}>
      <h1 className={styles.heading}>Shopy Register</h1>
      <Input onChange={e=>onChange(e,"name")} type="text" placeholder="name" label="Name" />
      <Input onChange={e=>onChange(e,"username")}  type="text" placeholder="username" label="Username" />
      <Input onChange={e=>onChange(e,"email")}  type="text" placeholder="example@mail.com" label="Email" />
      <Input onChange={e=>onChange(e,"password")}  type="password" placeholder="password" label="Password" />
      <Input onChange={e=>onChange(e,"confirmPassword")}  type="password" placeholder="confirm password" label="Confirm Password" />
      <Button onClick={onClick} name="Register" />
    </div>
  );
};

export default UserRegister;
