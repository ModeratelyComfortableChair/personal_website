import React, { Component } from "react";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<a className="navbar-brand" href="#">
					Jerome Marfleet
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navibation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="nav navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								data-toggle="dropdown"
								role="button"
								aria-expanded="false"
							>
								Projects
								<ul className="mr-auto dropdown-menu bg-secondary" role="menu">
									<li className="nav-item nav-link" href="#">
										Yup
									</li>
									<li className="nav-item nav-link" href="#">
										nup
									</li>
								</ul>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Timeline
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About Me
							</a>
						</li>
					</ul>
					<form className="form-inline mt-2 mt-md-0" _lpchecked="1">
						<input
							className="form-control mr-sm-2"
							type="text"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit"
						>
							Search
						</button>
					</form>
				</div>
			</nav>
		);
	}
}

export default NavBar;
