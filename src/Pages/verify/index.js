import React from "react";
import Link from "next/link";
import ReactInputVerificationCode from "react-input-verification-code";

import { Button } from "@mui/material";

import Dynamic from "../sign/dynamicInput";
import styles from "../styles/Verify.module.css";
import api from "../../axios-config/api";

const Verify = () => {
  const [mobile, setMobile] = React.useState({});
  const [code, setCode] = React.useState({});

  const [check, setCheck] = React.useState(false);
  const [myCode, setMyCode] = React.useState();

  const handleGetVal = (key) => (event) => {
    setMobile({ [key]: event.target.value });
  };

  const handleCheckCode = (key) => (event) => {
    setCode({ [key]: event });
  };

  const handleChangeMobile = React.useCallback(handleGetVal, [mobile]);
  const handleChangeVerifyCode = React.useCallback(handleCheckCode, [code]);

  const handleSign = async () => {
    setCheck(true);
    api.post("users/getVerificationCode", mobile).then((response) => {
      setMyCode(response?.data?.debug);
    });
  };

  const handleCheckVerify = async () => {
    api.post("users/confirmVerificationCode", { verificationCode: +code.confirmVerificationCode, mobileNumber: mobile.mobileNumber });
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.form}>
          {!check ? (
            <>
              <Dynamic
                label="mobileNumber"
                onChange={handleChangeMobile("mobileNumber")}
                type="number"
              />
              <Button variant="outlined" onClick={handleSign}>
                send
              </Button>
            </>
          ) : (
            <>
              <h1>{myCode}</h1>
              <ReactInputVerificationCode
                length={5}
                onChange={handleChangeVerifyCode("confirmVerificationCode")}
              />
              <Button variant="outlined" onClick={handleCheckVerify}>
                <Link href={"/sign"}>check verify</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default React.memo(Verify);
