import React, { Component } from "react";

class Poster extends Component {
	state = {};
	render() {
		return (
			<div>
				<a
					className="btn btn-primary"
					data-toggle="collapse"
					href="#collapseExample"
					role="button"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					Link with href
				</a>
				<div className="collapse" id="collapseExample">
					<div className="card card-body">Goodbye</div>
				</div>
			</div>
		);
	}
}

export default Poster;
