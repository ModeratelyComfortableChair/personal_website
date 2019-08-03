import React, { Component } from "react";
import NavBar from "./navbar";
import Carousel from "./carousel";

class HomePage extends Component {
	state = {};
	render() {
		return (
			<div>
				<NavBar />
				<Carousel />
			</div>
		);
	}
}

export default HomePage;
