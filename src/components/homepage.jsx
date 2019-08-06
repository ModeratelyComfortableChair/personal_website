import React, { Component } from "react";
import NavBar from "./navbar";
import JumboTron from "./jumbotron";

class HomePage extends Component {
	state = {};
	render() {
		return (
			<div>
				<NavBar />
				<JumboTron />
			</div>
		);
	}
}

export default HomePage;
