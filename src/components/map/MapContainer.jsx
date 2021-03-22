import React from "react";
import mapboxgl from "mapbox-gl";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRouteRequest, getRouteCoords } from "../../modules/route/";
import { drawRoute } from "./drawRoute";

mapboxgl.accessToken = "pk.eyJ1IjoiYWxraGltb3ZtdiIsImEiOiJja2xtcWE2eDcwYnNkMm5uM2FyamRtNTJtIn0.8ACVw97dnPRyB_PWCLNF5w";

class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		
		this.map = null;
		this.mapContainerRef = React.createRef();
	}

	componentDidMount() {
		this.map = new mapboxgl.Map({
			container: this.mapContainerRef.current,
			style: "mapbox://styles/mapbox/streets-v9",
			center: [30.31413, 59.93863],
			zoom: 10
		});
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			const { routeCoords } = this.props;

			if (this.map && this.map.getLayer("route")) {
				this.map.flyTo({
					center: [30.31413, 59.93863],
					zoom: 10
				});
				this.map.removeLayer("route");
				this.map.removeLayer("start1");
				this.map.removeLayer("start2");
				this.map.removeLayer("start3");
				this.map.removeLayer("end1");
				this.map.removeLayer("end2");
				this.map.removeLayer("end3");
				this.map.removeSource("route");
				this.map.removeSource("circle-start");
				this.map.removeSource("circle-end");
			}
			if (this.map && routeCoords.length) {
				drawRoute(this.map, routeCoords);
			}
		}
	}

	render() {
		const style = {
			position: "absolute",
			top: 0,
			right: 0,
			left: 0,
			bottom: 0,
			width: "100%",
			height: window.innerHeight - 72
		};

		return (
			<div style={{ position: "relative", zIndex: -10 }}>
				<div style={style} ref={this.mapContainerRef} className="mapContainer" />
			</div>
		);
	}
}

MapContainer.propTypes = {
	routeCoords: PropTypes.array
};

const mapStateToProps = state => ({
	routeCoords: getRouteCoords(state)
});

const mapDispatchToProps = { fetchRouteRequest };

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);