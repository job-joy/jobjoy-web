import React, { useCallback } from "react";
import Link from "next/link";

import { Button } from "@mui/material";

import Dynamic from "./dynamicInput";
import api from "../../axios-config/api";

const Controller = () => {
  const [valueInfoUser, setValueInfoUser] = React.useState({
    firstName: "",
    lastName: "",
    password: "",
    verificationCode: null,
    gender: "",
  });

  const infoUser = (key) => (e) => {
    setValueInfoUser((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleGetInfoUser = useCallback(infoUser, [valueInfoUser]);

  const handleSign = async () => {
    api.post("users/signUp", {...valueInfoUser,verificationCode:+valueInfoUser.verificationCode}).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <Dynamic
        type={"text"}
        onChange={handleGetInfoUser("firstName")}
        label="firstName"
      />
      <Dynamic
        type={"text"}
        onChange={handleGetInfoUser("lastName")}
        label="lastName"
      />
      <Dynamic
        type={"number"}
        onChange={handleGetInfoUser("verificationCode")}
        label="verificationCode"
      />
      <Dynamic
        type={"select"}
        onChange={handleGetInfoUser("gender")}
        label="gender"
      />
      <Dynamic
        type={"text"}
        onChange={handleGetInfoUser("password")}
        label="password"
      />
      <Button variant="outlined" onClick={handleSign}>
        <Link href={"/login"}>Sign up</Link>
      </Button>
    </>
  );
};
export default Controller;
