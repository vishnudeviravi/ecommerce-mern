import styles from "@/styles/cart.module.css";
import UserNavbar from "@/components/usernavbar";
import withAuth from "@/utils/withAuth";
import CartComponent from "@/components/cart";
import instance from "@/utils/axios";
import { useEffect } from "react";
import { getUser } from "@/utils";

const Cart = () => {
  const getCart = async () => {
    const cartItem = await instance.get(`/cart/${getUser()}`);
    console.log(cartItem);
  };

  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      <UserNavbar currentPage="cart" />
      <h1>cart </h1>
      <CartComponent />
    </div>
  );
};

export default withAuth(Cart);
