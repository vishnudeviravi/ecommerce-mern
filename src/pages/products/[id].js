import ImageViewer from "@/components/imageviewer";
import UserNavbar from "@/components/usernavbar";
import styles from "@/styles/productdetails.module.css";
import Chips from "@/components/chips";
import { Button } from "@mui/material";

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
          <div className={styles.productMainContainer}>
            <h1>iPhone 12 Pro Max With Facetime 256GB</h1>
            <div className={styles.productChip}>
              <Chips name="Mobile Phone" />
              <Chips name="Apple" />
            </div>
            <div className={styles.priceDetails}>
              <p className={styles.priceLabel}>Price</p>
              <p>1,20000</p>
              <p className={styles.actualPrice}>1,40000</p>
            </div>
            <p className={styles.description}>
              The iPhone 14 Plus display has rounded corners that follow a
              beautiful curved design, and these corners are within a standard
              rectangle. When measured as a standard rectangular shape, the
              screen is 16.95 centimetres (6.68 inches) diagonally (actual
              viewable area is less). 12MP Main: 26 mm, ƒ/1.5 aperture,
              sensor‑shift optical image stabilisation, seven‑element lens, 100%
              Focus Pixels 12MP Ultra Wide: 13 mm, ƒ/2.4 aperture and 120° field
              of view, five‑element lens 2x optical zoom out; digital zoom up to
              5x Sapphire crystal lens cover True Tone flash Photonic Engine
              Deep Fusion Smart HDR 4 Portrait mode with advanced bokeh and
              Depth Control Portrait Lighting with six effects (Natural, Studio,
              Contour, Stage, Stage Mono, High‑Key Mono) Night mode Panorama (up
              to 63MP) Photographic Styles Wide colour capture for photos and
              Live Photos Lens correction (Ultra Wide) Advanced red‑eye
              correction Auto image stabilisation Burst mode Photo geotagging
              Image formats captured: HEIF and JPEG
            </p>
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
