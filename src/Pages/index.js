import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          justifyContent: "start",
          background: "#fff",
          // position: "fixed",
        }}
      >
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          color="rgba(143, 88, 73, 1)"
        >
          welcome to job joy
        </Typography>
        <div></div>
        <Button variant="outlined" style={{ margin: 5 }}>
          <Link
            href={"/verify"}
            style={{ textDecoration: "none", color: "black", font: "icon" }}
          >
            Sign up
          </Link>
        </Button>
        <Button variant="outlined" style={{ margin: 5 }}>
          <Link
            href={"/login"}
            style={{ textDecoration: "none", color: "black", font: "icon" }}
          >
            Login
          </Link>
        </Button>
        <Button variant="outlined" style={{ margin: 5 }}>
          <Link
            href={"/posts"}
            style={{ textDecoration: "none", color: "black", font: "icon" }}
          >
            Post
          </Link>
        </Button>
      </div>
    </>
  );
};
export default Home;
