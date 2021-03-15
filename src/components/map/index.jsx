import React from "react";
import MapContainer from "./MapContainer";
import Order from "./Order";

export const Map = () => (
	<div data-testid="map">
		<MapContainer />
		<Order />
	</div>
);
