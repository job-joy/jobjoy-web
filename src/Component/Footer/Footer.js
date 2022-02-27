import { Typography } from "@mui/material";
import styles from "../../Pages/styles/Layout.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.footer}>
          <Typography variant="h5">LOCATION</Typography>
          <Typography variant="overline">Some Where in Iran</Typography>
          <Typography variant="overline">lorem</Typography>
        </div>
        <div className={styles.mainFooter}>
          <Typography variant="h5">ABOUT</Typography>
          <Typography variant="overline" className={styles.txtFooter}>
            this is sample page created to demonstrate converting bootstrap
            theme to react
          </Typography>
        </div>
      </div>
    </>
  );
};
export default Footer;
