import { Grid, Typography } from "@mui/material";
import AnimalCard from "./components/animal-card";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api", {next:{revalidate:0}});
  const data = await res.json();
  // console.log(data);
  return (
    <main>
      <Grid spacing={2} sx={{ py: [2,4] }} container>
        {data.data.map((animal) => (
          <Grid item xs={12} sm={3}>
            <AnimalCard {...animal} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
