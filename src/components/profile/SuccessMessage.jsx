import React from "react";

import { Box, Typography, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import { NavLink } from "../shared/NavLink";

export const useStyles = makeStyles(() => ({
	message: {
		marginTop: "30px",
		textAlign: "center"
	},
	button: {
		marginTop: "30px"
	}
}));

export const SuccessMessage = () => {
	const classes = useStyles();
	return (
		<Box className={classes.message}>
			<Typography variant="body1">Платежные данные обновлены. Теперь вы можете заказывать такси.</Typography>
			<Button
				className={classes.button}
				component={NavLink}
				to="/map"
				variant="contained"
				color="primary"
				size="large"
			>
				Перейти на карту
			</Button>
		</Box>
	);
};
