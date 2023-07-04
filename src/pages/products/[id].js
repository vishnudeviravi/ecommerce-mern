import ImageViewer from "@/components/imageviewer";
import UserNavbar from "@/components/usernavbar";
import styles from "@/styles/productdetails.module.css";
import Chips from "@/components/chips";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import instance from "@/utils/axios";
import { getUser } from "@/utils";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({});

  const getProductFromApi = async () => {
    if (id) {
      const product = await instance.get(`/product/${id}`);
      setProduct(product.data.data);
    }
  };

  useEffect(() => {
    getProductFromApi();
  }, [id]);

  const addToCart = async () => {
    await instance.patch(`/cart/${getUser()}`, { product: product });
  };
  return (
    <div className={styles.productDetails}>
      <UserNavbar />
      <div className={styles.productDetailsContainer}>
        <h1>Product</h1>
        <div className={styles.productItems}>
          <div className={styles.productImgContainer}>
            <ImageViewer
              thumbnailImage={product.mainImage}
              imgArray={product.images}
            />
          </div>
          <div className={styles.productMainContainer}>
            <h1>{product.title}</h1>
            <div className={styles.productChip}>
              <Chips name={product.category && product.category.name} />
              <Chips name={product.brand} />
            </div>
            <div className={styles.priceDetails}>
              <p className={styles.priceLabel}>Price</p>
              <p>{product.priceAfterDiscount}</p>
              <p className={styles.actualPrice}>{product.price}</p>
            </div>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.btnDiv}>
              <Button size="large" variant="contained">
                Buy
              </Button>
              <Button
                onClick={addToCart}
                size="large"
                variant="outlined"
                color="secondary"
              >
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
