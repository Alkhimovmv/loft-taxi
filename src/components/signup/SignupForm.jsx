import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RHFInput } from "react-hook-form-input";

import { Paper, Container, Typography, Link, Grid, TextField, Box, Button } from "@material-ui/core/";

import { getIsLoggedIn, getError, sendRegisterRequest } from "../../modules/auth";
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
	const { handleSubmit, register, setValue } = useForm();

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
							<RHFInput
								as={<TextField />}
								label="Адрес электронной почты"
								name="email"
								register={register}
								setValue={setValue}
								inputProps={{ "data-testid": "inputEmail", type: "email" }}
								margin="normal"
								fullWidth
								required
							/>
						</Grid>
						<Grid item xs={6}>
							<RHFInput
								as={<TextField />}
								label="Имя"
								name="name"
								register={register}
								setValue={setValue}
								inputProps={{ "data-testid": "inputName", type: "text" }}
								margin="normal"
								fullWidth
								required
							/>
						</Grid>
						<Grid item xs={6}>
							<RHFInput
								as={<TextField />}
								label="Фамилия"
								name="surname"
								register={register}
								setValue={setValue}
								inputProps={{ "data-testid": "inputSurname", type: "text" }}
								margin="normal"
								fullWidth
								required
							/>
						</Grid>
						<Grid item xs={12}>
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
						</Grid>
					</Grid>
					<Box className={classes.buttonContainer}>
						<Button type="submit" variant="contained" color="primary">Зарегистрироваться</Button>
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