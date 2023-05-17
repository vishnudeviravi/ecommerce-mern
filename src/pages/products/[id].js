import ImageViewer from "@/components/imageviewer";
import UserNavbar from "@/components/usernavbar";
import styles from "@/styles/productdetails.module.css";

const ProductDetails = () => {
  return (
    <div className={styles.productDetails}>
      <UserNavbar />
      <div className={styles.productDetailsContainer}>
        <h1>Product</h1>
        <div className={styles.productItems}>
          <div className={styles.productImgContainer}>
            <ImageViewer />
          </div>
          <div className={styles.productMainContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
