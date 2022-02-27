import React from "react";
import Link from "next/link";

import { TextField, Button } from "@mui/material";

import styles from "../styles/ForgetPass.module.css";

const ForgetPassword = () => {
  return (
    <>
      <div className={styles.pageForGetPass}>
        <div className={styles.boxForGetPass}>
          <TextField
            id="outlined-basic"
            label="new PassWord"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="confirm" variant="outlined" />

          <Button variant="outlined">
            <Link href={"/login"}>Save</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;
