import styles from "./product.module.css";
import Image from "next/image";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { useRouter } from "next/router";

const Product = props => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/products/${props.id}`)}
      className={styles.product}
    >
      <Image
        width={290}
        height={250}
        src={props.mainImage}
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.productInfo}>
          <p className={styles.priceTag}>Price</p>
          <p className={styles.price}>
            {props.price}
            <span>{props.actualPrice}</span>
          </p>
        </div>
        <UilShoppingBag className={styles.cartBtn} />
      </div>
    </div>
  );
};

export default Product;
