import React, { Component } from "react";
import NavBar from "./navbar";
import JumboTron from "./jumbotron";
import Footer from "./footer";

class HomePage extends Component {
	state = {
		contacts: []
	};

	componentDidMount() {
		fetch("http://jsonplaceholder.typicode.com/users", { mode: "cors" })
			.then(res => res.json())
			.then(data => {
				this.setState({ contacts: data });
			})
			.catch(console.log);
	}
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
