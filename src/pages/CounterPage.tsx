import { IconButton, Grid, Typography } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useCounterStore } from "store/counter";

export default function CounterPage() {
    const {value, handleIncrement, handleDecriment} = useCounterStore();

    return (
      <Grid container alignItems={"center"} justifyContent={"center"} spacing={2}>
        <Grid item>
          <IconButton onClick={handleDecriment} size="large">
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            {value}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={handleIncrement} size="large">
            <AddCircleOutlineIcon />
          </IconButton>
        </Grid>
      </Grid>
    )
}