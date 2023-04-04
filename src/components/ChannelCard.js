import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { md: "320px", xs: "356px" },
        margin: "auto",
        height: "326px",
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50px",
              height: "180",
              width: "180px",
              md: 2,
              border: "ipx solid #e3e3e3",
            }}
          />
        </CardContent>
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{" "}
          <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}{" "}
            subscribers
          </Typography>
        )}
      </Link>
    </Box>
  );
};

export default ChannelCard;
