import React, { Component } from "react";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<a class="navbar-brand" href="#">
					Jerome Marfleet
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navibation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="nav navbar-nav mr-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#">
								Home<span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								data-toggle="dropdown"
								role="button"
								aria-expanded="false"
							>
								Projects
								<ul class="mr-auto dropdown-menu bg-secondary" role="menu">
									<li class="nav-item">
										<a class="nav-link" href="#">
											Yup
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">
											nup
										</a>
									</li>
								</ul>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Timeline
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								About Me
							</a>
						</li>
					</ul>
					<form class="form-inline mt-2 mt-md-0" _lpchecked="1">
						<input
							class="form-control mr-sm-2"
							type="text"
							placeholder="Search"
							aria-label="Search"
						/>
						<button class="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
		);
	}
}

export default NavBar;
