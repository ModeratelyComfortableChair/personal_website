import React, { Component } from "react";

class Poster extends Component {
	state = {};
	render() {
		return (
			<div>
				<button
					id="collapseExample"
					className="btn btn-primary"
					type="button"
					data-toggle="collapse"
					data-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					Button with data-target
				</button>
			</div>
		);
	}
}

export default Poster;
