import React from "react";

import Location from "../../components/location/location"
import LocationIcon from "../../assets/images/location-icon.png";
import "./map.styles.scss"

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";


const styles = [
	{
		featureType: "all",
		elementType: "geometry.fill",
		stylers: [{ lightness: "-100" }, { color: "#ffdac9" }],
	},
	{
		featureType: "poi",
		elementType: "geometry.fill",
		stylers: [{ visibility: "on" }, { color: "#ffcab1" }],
	},
	{
		featureType: "poi",
		elementType: "labels",
		stylers: [{ visibility: "off" }],
	},
	{
		featureType: "poi.park",
		elementType: "geometry.fill",
		stylers: [{ color: "#ffcab1" }],
	},
	{
		featureType: "road",
		elementType: "geometry",
		stylers: [{ lightness: 100 }, { visibility: "simplified" }],
	},
	{
		featureType: "road",
		elementType: "labels",
		stylers: [{ visibility: "off" }],
	},
	{
		featureType: "transit.line",
		elementType: "geometry",
		stylers: [{ visibility: "on" }, { lightness: 700 }],
	},
	{
		featureType: "water",
		elementType: "all",
		stylers: [{ color: "#92e1dd" }],
	},
];

class MapSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stores: [
				{
					latitude: 51.512572097162582,
					longitude: -0.12686668586586738,
				},
			],
		};
	}

	displayMarkers = () => {
		return this.state.stores.map((store, index) => {
			return (
				<Marker
					key={index}
					id={index}
					position={{
						lat: store.latitude,
						lng: store.longitude,
					}}
				/>
			);
		});
	};

	render() {
		return (
            <div className="maps-main" id="location">
                <div className="map-info">
                    <Location/>
                </div>
				<div>
					<Map
						google={this.props.google}
						zoom={14}
						styles={styles}
						zoomControl={true}
						disableDefaultUI
						initialCenter={{
							lat: 51.51257209716258,
							lng: -0.12686668586586738,
						}}
					>
						<Marker
							icon={LocationIcon}
							position={{
								lat: 51.51257209716258,
								lng: -0.12686668586586738,
							}}
						/>
					</Map>
				</div>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyDF_97kZnWWx-dsAqxc0aAk7kTaQQua_I8",
})(MapSection);
