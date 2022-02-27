import { Select, MenuItem, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Profile = () => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
        }}
      />
      <Typography variant="body2">name: vida</Typography>
      <Typography variant="body2">family: hedayati</Typography>
      <Typography variant="body2">mobile: 09027064195</Typography>
      <Typography variant="body2">
        add you resume :
        <Button>
          Upload File resume
          <input type="file" hidden />
        </Button>
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs aria-label="basic tabs example">
            <Tab label="Add Post" />
            <Tab label="List Post" />
            <Tab label="Edit Post" />
          </Tabs>
        </Box>
        <TabPanel index={0}>Add Post</TabPanel>
        <TabPanel index={1}>List Post</TabPanel>
        <TabPanel index={2}>Edit Post</TabPanel>
      </Box>
    </>
  );
};

export default Profile;
