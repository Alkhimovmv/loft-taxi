import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RHFInput } from "react-hook-form-input";
import { Container, Paper, Typography, Link, TextField, Box, Button } from "@material-ui/core";
import { getIsLoggedIn, getError, sendAuthRequest } from "../../modules/authAndRegister";
import { NavLink } from "../shared/NavLink";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	form: {
		padding: "44px 0",
		width: "500px"
	},
	formContainer: {
		padding: "0 60px 0 50px"
	},
	buttonContainer: {
		display: "flex",
		justifyContent: "flex-end",
		marginTop: "30px"
	}
}));

const LoginForm = React.memo(props => {
	const { handleSubmit, register, setValue } = useForm();
	const classes = useStyles();
	const { sendAuthRequest, isLoggedIn } = props;

	const onSubmit = data => {
		sendAuthRequest(data);
	};

	return (
		isLoggedIn ? <Redirect to="/map" /> :
		<Paper className={classes.form}>
			<Container className={classes.formContainer}>
				<Typography variant="h4" component="h1">Войти</Typography>
				<div>
					<p>
						Новый пользователь?{" "}
						<Link to="/signup" component={NavLink}>
							Зарегистрируйтесь
						</Link>
					</p>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<RHFInput
						as={<TextField />}
						label="Имя пользователя"
						name="email"
						register={register}
						setValue={setValue}
						inputProps={{ "data-testid": "inputName", type: "email" }}
						margin="normal"
						fullWidth
						required
					/>
					<RHFInput
						as={<TextField />}
						label="Пароль"
						name="password"
						register={register}
						setValue={setValue}
						inputProps={{
							"data-testid": "inputPassword",
							type: "password",
							minLength: 8
						}}
						margin="normal"
						fullWidth
						required
					/>
					<Box className={classes.buttonContainer}>
						<Button type="submit" variant="contained" color="primary" data-testid="buttonLogin">Войти</Button>
					</Box>
				</form>
			</Container>
		</Paper>
	);
});

LoginForm.propTypes = {
	sendAuthRequest: PropTypes.func,
	isLoggedIn: PropTypes.bool
};

const mapStateToProps = state => ({
	isLoggedIn: getIsLoggedIn(state),
	error: getError(state)
});

const mapDispatchToProps = { sendAuthRequest };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);