import styles from "./product.module.css";
import Image from "next/image";
import { UilShoppingBag } from "@iconscout/react-unicons";

const Product = () => {
  return (
    <div className={styles.product}>
      <Image
        width={290}
        height={250}
        src="/mobile.jpg"
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <p className={styles.title}>iPhone 12 Pro Max With Facetime 256GB</p>
        <div className={styles.productInfo}>
          <p className={styles.priceTag}>Price</p>
          <p className={styles.price}>
            1,20000 <span>1,40000</span>
          </p>
        </div>
        <UilShoppingBag className={styles.cartBtn} />
      </div>
    </div>
  );
};

export default Product;
