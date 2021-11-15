import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Checkbox,
  Collapse,
  Skeleton,
  Chip,
  Stack,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MailIcon from "@mui/icons-material/Mail";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import { useTranslation } from "react-i18next";

const Box = ({ image }) => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = React.useState(true);

  const [chipName, setChipName] = React.useState([
    { name: "vida" },
    { name: "vida" },
    { name: "vida" },
  ]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderImage = image ? <Skeleton height={194} animation="wave" /> : "";

  return (
    <>
      <CardBox>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="profile-box">
              {t("iconName")}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={t("nameBox")}
          subheader={t("date")}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {t("lorem")}
          </Typography>
          {renderImage}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add-Comment">
            <InsertCommentIcon />
          </IconButton>
          <IconButton aria-label="add-message">
            <MailIcon />
          </IconButton>
          <IconButton aria-label="add-to-favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Checkbox
            style={{ marginLeft: 150 }}
            aria-label="save-box"
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout="auto">
          <CardContent>
            <Stack spacing={1} direction="row" style={{ flexWrap: "wrap" }}>
              {chipName.map((elem) => (
                <Chip label={elem.name} />
              ))}
            </Stack>
          </CardContent>
        </Collapse>
      </CardBox>
    </>
  );
};

const CardBox = styled(Card)(() => ({
  maxWidth: 400,
  margin: "auto",
  marginTop: 40,
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default Box;
