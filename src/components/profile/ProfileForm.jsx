import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { RHFInput } from "react-hook-form-input";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Paper, TextField, Button } from "@material-ui/core/";
import { MCIcon } from "loft-taxi-mui-theme";

import { SuccessMessage } from "./SuccessMessage";
import { getSavedCard, getError, sendCardRequest, setSuccessMessageIsShown, getSuccessMessageIsShown, fetchCardRequest } from "../../modules/card";

export const useStyles = makeStyles(() => ({
	buttonContainer: {
		display: "flex",
		justifyContent: "center",
		marginTop: "46px"
	},
	cardsContainer: {
		marginTop: "40px",
		display: "flex",
		justifyContent: "space-between"
	},
	card: {
		boxSizing: "border-box",
		height: "189px",
		width: "300px",
		padding: "20px 30px 30px",
		position: "relative"
	}
}));

const ProfileForm = React.memo(props => {
	const { sendCardRequest, savedCard, fetchCardRequest, setSuccessMessageIsShown, successMessageIsShown } = props;
	const classes = useStyles();

	const { handleSubmit, register, setValue, errors } = useForm();

	useEffect(() => {	
		fetchCardRequest();
	}, []);
	
	useEffect(() => {
		setValue("cardNumber", savedCard.cardNumber);
		setValue("expiryDate", savedCard.expiryDate);
		setValue("cardName", savedCard.cardName);
		setValue("cvc", savedCard.cvc);
	}, [savedCard]);

	useEffect(() => {
		return () => {
			setSuccessMessageIsShown(false);
		};
	}, []);

	const onSubmit = data => {
		sendCardRequest(data);
	};

	if (successMessageIsShown) {
		return <SuccessMessage />;
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box textAlign="center">
				<Typography variant="subtitle1">Способ оплаты</Typography>
			</Box>
			<Box className={classes.cardsContainer}>
				<Paper className={classes.card}>
					<MCIcon />
					<RHFInput
						as={<TextField />}
						label="Номер карты:"
						placeholder="0000 0000 0000 0000"
						name="cardNumber"
						register={register}
						setValue={setValue}
						helperText={
							errors.cardNumber && "Номер карты должен сожержать 16 символов"
						}
						rules={{
							minLength: 16,
							maxLength: 16
						}}
						InputLabelProps={{ shrink: true }}
						margin="normal"
						fullWidth
						required
					/>
					<RHFInput
						as={<TextField />}
						label="Срок действия:"
						placeholder="01/21"
						name="expiryDate"
						register={register}
						setValue={setValue}
						InputLabelProps={{ shrink: true }}
						views={["year", "month"]}
						format="MM/YY"
						disablePast
						disableToolbar
						margin="normal"
						fullWidth
						required
					/>
				</Paper>
				<Paper className={classes.card}>
					<RHFInput
						as={<TextField />}
						label="Имя владельца:"
						placeholder="USER NAME"
						name="cardName"
						register={register}
						setValue={setValue}
						InputLabelProps={{ shrink: true }}
						helperText={
							errors.cardName && "Имя должно содержать только латинские символы"
						}
						rules={{
							pattern: /^[A-Za-z\s]+$/i
						}}
						margin="normal"
						fullWidth
						required
					/>
					<RHFInput
						as={<TextField />}
						label="CVC"
						placeholder="123"
						name="cvc"
						register={register}
						setValue={setValue}

						helperText={errors.cvc && "CVC должен сожержать 3 символа"}
						rules={{
							minLength: 3,
							maxLength: 3
						}}
						InputLabelProps={{ shrink: true }}
						margin="normal"
						fullWidth
						required
					/>
				</Paper>
			</Box>
			<Box className={classes.buttonContainer}>
				<Button type="submit" variant="contained" color="primary" size="large">Сохранить</Button>
			</Box>
		</form>
	);
});

ProfileForm.propTypes = {
	sendCardRequest: PropTypes.func,
	savedCard: PropTypes.object,
	successMessageIsShown: PropTypes.bool,
	setSuccessMessageIsShown: PropTypes.func,
	fetchCardRequest: PropTypes.func
};

const mapStateToProps = state => ({
	savedCard: getSavedCard(state),
	error: getError(state),
	successMessageIsShown: getSuccessMessageIsShown(state)
});

const mapDispatchToProps = {
	sendCardRequest,
	setSuccessMessageIsShown,
	fetchCardRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
