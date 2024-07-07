import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>akifdev</div>
      <div className={styles.text}>
        creative thoughts agency All rights reseerved.
      </div>
    </div>
  );
};

export default Footer;
