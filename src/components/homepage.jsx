import React, { Component } from "react";
import NavBar from "./navbar";
import JumboTron from "./jumbotron";
import Footer from "./footer";

class HomePage extends Component {
	state = {
		contacts: []
	};
	render() {
		return (
			<div>
				<NavBar />
				<JumboTron />
				<Footer />
			</div>
		);
	}
}

export default HomePage;
