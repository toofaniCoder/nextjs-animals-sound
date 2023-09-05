import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Image from "next/image";

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
  return (
    <Card>
      <CardActionArea sx={cardActionStyle}>
        <Image src={`/images/${imagePath}`} width={150} height={150} />
        <Typography sx={labelStyle}>{label}</Typography>
      </CardActionArea>
    </Card>
  );
}
