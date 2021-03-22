import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Login } from "../../components/login";
import { Signup } from "../../components/signup";
import { Profile } from "../../components/profile";
import { Map } from "../../components/map";
import { getIsLoggedIn } from "../../modules/authAndRegister";

const currentPage = props => {
	const { isLoggedIn } = props;

	const PrivateRoute = ({ component: RouteComponent }) => (
		<Route
			render={routeProps =>
				isLoggedIn ? (
					<RouteComponent {...routeProps} />
				) : (
					<Redirect to="/login" />
				)
			}
		/>
	);

	return (
		<Switch>
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
			<PrivateRoute path="/map" component={Map} />
			<PrivateRoute path="/profile" component={Profile} />
			<Redirect to="/map" />
		</Switch>
	);
};

currentPage.propTypes = {
	isLoggedIn: PropTypes.bool
};

const mapStateToProps = state => ({
	isLoggedIn: getIsLoggedIn(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(currentPage);