import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
	return (
		<Grid container>
			<Grid item>
				<Typography variant="h2">Страница не найдена</Typography>
			</Grid>
			
			<Grid item>
				<Link to="/">На главную</Link>
			</Grid>
		</Grid>
	)
}