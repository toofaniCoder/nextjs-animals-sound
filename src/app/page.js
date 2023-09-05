import { Grid, Typography } from "@mui/material";
import AnimalCard from "./components/animal-card";

export default function Home() {
  return (
    <main>
      <Typography variant="h3">Hello! Next JS</Typography>
     <Grid container>
      <Grid item sm={3}>
      <AnimalCard />
      </Grid>
     </Grid>
    </main>
  );
}
