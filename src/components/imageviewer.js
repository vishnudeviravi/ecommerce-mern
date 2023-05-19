import styles from "./imageviewer.module.css";
import { useState, useEffect } from "react";

const ImageViewer = props => {
  const [img, setImg] = useState(props.thumbnailImage);
  useEffect(() => {
    setImg(props.thumbnailImage);
  }, [props.thumbnailImage]);
  return (
    <div className={styles.imageViewer}>
      <img className={styles.displayImg} src={img} />
      <div className={styles.selectImage}>
        {(props.imgArray || []).map(item => (
          <img onClick={() => setImg(item)} src={item} />
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
