import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { Box, MenuItem, Select, Button, FormControl, InputLabel } from "@material-ui/core";
import { fetchAddressRequest, getAddressList } from "../../modules/addressList";
import { fetchRouteRequest } from "../../modules/route";

const useStyles = makeStyles(() => ({
	formControl: {
		minWidth: "100%"
	},
	buttonContainer: {
		marginTop: "30px"
	}
}));

const OrderForm = React.memo(props => {
	const { handleSubmit, register, setValue, getValues, watch } = useForm();
	const { fetchAddressRequest, addressList, fetchRouteRequest } = props;
	const classes = useStyles();

	useEffect(() => {
		fetchAddressRequest();

		register({ name: "from" }, { required: true });
		register({ name: "to" }, { required: true });
	}, []);

	const values = getValues();
	const watchFrom = watch("from");
	const watchTo = watch("to");

	const onChange = event => {
		setValue(event.target.name, event.target.value);
	};

	const AddressSelect = props => {
		const { addressKey, otherAddress } = props;

		let availableAddresses = addressList
			.filter(item => item !== otherAddress)
			.map(addressItem => (
				<MenuItem key={addressItem} value={addressItem}> {addressItem} </MenuItem>
			));

		return (
			<>
				<Select
					value={values[addressKey] || ""}
					onChange={onChange}
					name={addressKey}
					inputProps={{ name: addressKey, id: addressKey }}
					data-testid={addressKey}
					autoWidth
				>
					{availableAddresses}
				</Select>
			</>
		);
	};

	const onSubmit = data => {
		fetchRouteRequest(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormControl className={classes.formControl}>
				<InputLabel htmlFor="from">Откуда</InputLabel>
				<AddressSelect addressKey="from" otherAddress={watchTo} />
			</FormControl>
			<FormControl className={classes.formControl} margin="normal">
				<InputLabel htmlFor="to">Куда</InputLabel>
				<AddressSelect addressKey="to" otherAddress={watchFrom} />
			</FormControl>
			<Box className={classes.buttonContainer}>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					data-testid="buttonLogin"
					fullWidth
					size="large"
				>
					Вызвать такси
				</Button>
			</Box>
		</form>
	);
});

OrderForm.propTypes = {
	fetchAddressRequest: PropTypes.func,
	fetchRouteRequest: PropTypes.func,
	fetchCardRequest: PropTypes.func,
	paymentMethodSaved: PropTypes.bool,
	addressList: PropTypes.array,
	addressKey: PropTypes.string,
	otherAddress: PropTypes.string
};

const mapStateToProps = state => ({
	addressList: getAddressList(state)
});

const mapDispatchToProps = {
	fetchAddressRequest,
	fetchRouteRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);