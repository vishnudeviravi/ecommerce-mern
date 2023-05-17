import styles from "@/styles/cart.module.css";
import UserNavbar from "@/components/usernavbar";

const Cart = () => {
  return (
    <div>
      <UserNavbar currentPage="cart" />
      <h1>cart </h1>
    </div>
  );
};

export default Cart;
