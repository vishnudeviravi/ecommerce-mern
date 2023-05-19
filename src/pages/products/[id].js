import ImageViewer from "@/components/imageviewer";
import UserNavbar from "@/components/usernavbar";
import styles from "@/styles/productdetails.module.css";
import Chips from "@/components/chips";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({});

  const getProductFromApi = async () => {
    if (id) {
      const product = await fetch(`http://localhost:3000/api/product/${id}`);
      const jsonProduct = await product.json();
      setProduct(jsonProduct);
    }
  };

  useEffect(() => {
    getProductFromApi();
  }, [id]);

  return (
    <div className={styles.productDetails}>
      <UserNavbar />
      <div className={styles.productDetailsContainer}>
        <h1>Product</h1>
        <div className={styles.productItems}>
          <div className={styles.productImgContainer}>
            <ImageViewer
              thumbnailImage={product.thumbnailImage}
              imgArray={product.image}
            />
          </div>
          <div className={styles.productMainContainer}>
            <h1>{product.title}</h1>
            <div className={styles.productChip}>
              <Chips name={product.category} />
              <Chips name={product.brand} />
            </div>
            <div className={styles.priceDetails}>
              <p className={styles.priceLabel}>Price</p>
              <p>{product.price}</p>
              <p className={styles.actualPrice}>{product.actualPrice}</p>
            </div>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.btnDiv}>
              <Button size="large" variant="contained">
                Buy
              </Button>
              <Button size="large" variant="outlined" color="secondary">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
