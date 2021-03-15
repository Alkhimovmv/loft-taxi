import React from "react";
import PropTypes from "prop-types";

import Background from "../../image/login-background.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Logo } from "loft-taxi-mui-theme";
import { Container, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	authBackground: {
		backgroundColor: "#000",
		backgroundImage: `url(${Background})`,
		backgroundSize: "cover"
	},
	container: {
		maxWidth: "1000px",
		minHeight: "100vh",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	logo: {
		width: "420px",
		display: "flex",
		justifyContent: "center"
	}
}));

export const AuthPage = props => {
	const classes = useStyles();
	return (
		<div className={classes.authBackground}>
			<Container>
				<Box className={classes.container}>
					<Box className={classes.logo}>
						<Logo white animated />
					</Box>
					{props.children}
				</Box>
			</Container>
		</div>
	);
};

AuthPage.propTypes = {
	children: PropTypes.node.isRequired
};