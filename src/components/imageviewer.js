import styles from "./imageviewer.module.css";

const ImageViewer = () => {
  return (
    <div className={styles.imageViewer}>
      <img className={styles.displayImg} src="/mobile.jpg" />
      <div className={styles.selectImage}>
        <img />
        <img />
        <img />
      </div>
    </div>
  );
};

export default ImageViewer;
