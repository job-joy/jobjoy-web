import React from "react";
// import { useLocation } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import axios from "axios";

const Comment = (props) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div style={{ width: "50%" }}>
          <Card sx={{ maxWidth: "100%", margin: 5 }}>
            <CardMedia
              component="img"
              height="100px"
              // image={state.state.image}
              alt="green iguana"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Tooltip>
                <Typography gutterBottom variant="h5" component="div">
                  {/* {state.state.user.name} */}
                </Typography>
              </Tooltip>
              <Typography variant="body2" color="text.secondary">
                {/* {state.state.title} */}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Save</Button>

              <IconButton aria-label="add to favorites"></IconButton>
            </CardActions>
            {/* <Stack direction="row" style={{ flexWrap: "wrap" }}>
              {state.state.tags.map((x) => (
                <Chip label={x} style={{ margin: 5 }} />
              ))}
            </Stack> */}
            {/* {data?.map((x) => (
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={x.text}
                      secondary={x.createdAt?.slice(0, 10)}
                    />
                  </ListItem>
                </>
              </List>
            ))} */}
          </Card>
        </div>
        <div style={{ width: "50%" }}>
          <Card sx={{ maxWidth: "100%", margin: 5 }}>
            <CardContent>
              <Tooltip>
                <Typography gutterBottom variant="h5" component="div">
                  Add your comment
                </Typography>
              </Tooltip>
              <Typography variant="body2" color="text.secondary">
                <textarea
                  type="textarea"
                  style={{ outline: "none" }}
                  rows="4"
                  cols="95"
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Send</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await axios.get("http://localhost:3001/posts");
  return {
    props: {
      posts: response.data,
    },
  };
}

export async function getStaticPatch() {
  const response = await axios.get();
}
export default Comment;
