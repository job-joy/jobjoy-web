import React from "react";
import Nav from "./Feed/Nav";
import Box from "./Feed/Box";
import { useStateTheme } from "../index";

const MainFeeds = () => {
  const { theme, setTheme } = useStateTheme();

  return (
    <>
      <div
        style={{
          background:
            theme == "light"
              ? "linear-gradient(to right, #8e9eab, #eef2f3)"
              : "linear-gradient(to right, #525252, #3d72b4)",
        }}
      >
        <Nav />
        <Box image={true} />
        <Box image={false} />
      </div>
    </>
  );
};

export default MainFeeds;
