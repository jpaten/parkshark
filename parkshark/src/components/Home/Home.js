import "./Home.css";
import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker.tsx";
import Box from "@mui/material/Box";

const key = { key: "supersecretkey" };
function MainContent2() {
	return (
		<MainPanel1>
			<div className="padded modernWhite">
				<h1>Welcome to ParkShark</h1>
			</div>
			<div className="padded modernWhite">
				<p>Explore nearby parking spots</p>
			</div>
			<Box sx={{ m: "0.7rem" }} />
			<div>
				<button className="padded">Explore more listings</button>
				<button className="padded">Create a new listing</button>
			</div>
			<div style={{ height: "80vh", width: "80%", margin: 40 }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: key }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
				>
					<Marker lat={34.05} lng={241.615} name="My Marker" color="red" />
				</GoogleMapReact>
			</div>
		</MainPanel1>
	);
}

const defaultProps = {
	center: {
		lat: 34.05,
		lng: 241.61502627,
	},
	zoom: 11,
};

const MainPanel1 = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px 50px;
	align-items: flex-start;
	min-height: 2000px;
	background-image: url("https://anima-uploads.s3.amazonaws.com/projects/628530bfce435c86033077a0/releases/628530cd5d1a5f31f0381604/img/home@1x.png");
	background-color: black;
`;

export default MainContent2;
