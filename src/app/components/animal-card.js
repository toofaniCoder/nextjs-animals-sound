"use client";
import {  useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import AudioPlayer from "./audio-player";

import LinearProgress from "@mui/material/LinearProgress";
const cardActionStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  py: 4,
};

const labelStyle = {
  position: "absolute",
  right: 0,
  top: 0,
  bgcolor: "rgba(0,0,0,0.6)",
  px: 2,
  py: 1,
  borderBottomLeftRadius: 10,
};

export default function AnimalCard({ label, soundPath, imagePath }) {
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const play = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  return (
    <Card>
      <CardActionArea onClick={play} sx={cardActionStyle}>
        <AudioPlayer setProgress={setProgress} ref={audioRef} src={`/sounds/${soundPath}`} />
        <Image src={`/images/${imagePath}`} width={150} height={150} />
        <Typography sx={labelStyle}>{label}</Typography>
      </CardActionArea>
      <LinearProgress sx={{ height: 5 }} variant="determinate" value={progress} />
    </Card>
  );
}
