import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image from "next/image";

export default function AnimalCard() {
  return (
    <Card>
      <CardActionArea
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          py: 4,
        }}
      >
        <Image src={"/images/elephant.png"} width={150} height={150} />
        <Typography
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            bgcolor: "rgba(0,0,0,0.6)",
            px: 2,
            py: 1,
            borderBottomLeftRadius: 10,
          }}
        >
          animal name
        </Typography>
      </CardActionArea>
    </Card>
  );
}
