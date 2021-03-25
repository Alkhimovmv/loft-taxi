import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import { Paper, Container, Typography, Link, Grid, TextField, Box, Button } from "@material-ui/core/";

import { getIsLoggedIn, getError, sendRegisterRequest } from "../../modules/authAndRegister";
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

const SignupForm = React.memo(props => {
	const { sendRegisterRequest, isLoggedIn } = props;
	const classes = useStyles();
	const { handleSubmit, register, control } = useForm();

	const onSubmit = data => {
		sendRegisterRequest(data);
	};

	return (
		isLoggedIn ? <Redirect to="/map" /> :
		<Paper className={classes.form}>
			<Container className={classes.formContainer}>
				<Typography variant="h4" component="h1">Регистрация</Typography>
				<div>
					<p>
						Уже зарегистрирован?{" "}
						<Link to="/login" component={NavLink}>Войти</Link>
					</p>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Controller
								as={<TextField />}
								label="Адрес электронной почты"
								name="email"
								register={register}
								control={control}
								defaultValue={""}
								inputProps={{ "data-testid": "inputEmail", type: "email" }}
								margin="normal"
								fullWidth
								required
							/>
						</Grid>
						<Grid item xs={6}>
							<Controller
								as={<TextField />}
								label="Имя"
								name="name"
								register={register}
								control={control}
								defaultValue={""}
								inputProps={{ "data-testid": "inputName", type: "text" }}
								margin="normal"
								fullWidth
								required
							/>
						</Grid>
						<Grid item xs={6}>
							<Controller
								as={<TextField />}
								label="Фамилия"
								name="surname"
								register={register}
								control={control}
								defaultValue={""}
								inputProps={{ "data-testid": "inputSurname", type: "text" }}
								margin="normal"
								fullWidth
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								as={<TextField />}
								label="Пароль"
								name="password"
								register={register}
								control={control}
								defaultValue={""}
								inputProps={{
									"data-testid": "inputPassword",
									type: "password",
									minLength: 8
								}}
								margin="normal"
								fullWidth
								required
							/>
						</Grid>
					</Grid>
					<Box className={classes.buttonContainer}>
						<Button type="submit" variant="contained" color="primary" data-testid="buttonSignup">Зарегистрироваться</Button>
					</Box>
				</form>
			</Container>
		</Paper>
	);
});

SignupForm.propTypes = {
	sendRegisterRequest: PropTypes.func,
	isLoggedIn: PropTypes.bool
};

const mapStateToProps = state => ({
	isLoggedIn: getIsLoggedIn(state),
	error: getError(state)
});

const mapDispatchToProps = { sendRegisterRequest };

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
