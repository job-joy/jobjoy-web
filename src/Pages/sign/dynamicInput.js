import React from "react";

import {
  MenuItem,
  Select,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";

const Dynamic = ({ type, onChange, label }) => {
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        {type === "text" && (
          <TextField
            required
            label={label}
            variant="outlined"
            onChange={onChange}
            type={type}
          />
        )}

        {type === "number" && (
          <TextField
            label={label}
            type={"number"}
            variant="outlined"
            onChange={onChange}
          />
        )}

        {type === "select" && (
          <>
            <InputLabel id="demo-simple-select-label">gender</InputLabel>
            <Select
              id="demo-simple-select-helper"
              labelId="demo-simple-select-helper-label"
              label={label}
              onChange={onChange}
              placeholder="please choose gender"
            >
              <MenuItem value={"mail"}>woman</MenuItem>
              <MenuItem value={"woman"}>men</MenuItem>
            </Select>
          </>
        )}
      </FormControl>
    </>
  );
};
export default React.memo(Dynamic);
