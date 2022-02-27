import React from "react";
import Link from "next/link";

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

import FavoriteIcon from "@mui/icons-material/Favorite";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import api from "../../axios-config/api";

const List = ({ post }) => {
  console.log(post);

  return (
    <>
      {post?.map((x) => (
        <Card sx={{ maxWidth: 345, margin: 5 }}>
          <CardMedia
            component="img"
            height="100px"
            image={x.image}
            alt="green iguana"
          />
          <CardContent>
            <Tooltip title={x.user.email}>
              <Typography gutterBottom variant="h5" component="div">
                {x.user.name}
              </Typography>
            </Tooltip>
            <Typography variant="body2" color="text.secondary">
              {x.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Save</Button>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <Link href={`/comment/${x._id}`}>
                <CreateNewFolderIcon />
              </Link>
            </IconButton>
          </CardActions>
          {/* <Stack direction="row" style={{ flexWrap: "wrap" }}>
            {x.tags.map((x) => (
              <Chip label={x} style={{ margin: 5 }} />
            ))}
          </Stack> */}
        </Card>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const fetchPostList = async () => {
    try {
      const res = await api.get("feeds/getAllPosts");
      console.log('res: ', res);
      return res;
    } catch (error) {
      console.log("fetching initial post felid", error);
    }
  };
  let res = await fetchPostList();
  return {
    props: {
      post: res,
    },
  };
};

export default List;
