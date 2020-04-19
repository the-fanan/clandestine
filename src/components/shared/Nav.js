import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
	return (
		<nav className="cl-nav">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12 col-md-3">
						<div className="banner d-flex justify-content-between">
							<NavLink to="/" className="navbar-brand">Clandestine</NavLink>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<i className="fa fa-lg fa-bars"></i>
							</button>
						</div>
					</div>

					<div className="col-12 col-md-9 d-flex justify-content-end">
						<ul className="nav">
							<li className="nav-item">
								<NavLink to="/auth" className="nav-link">Login / Sign Up</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/global-leader-board" className="nav-link">Global Leader Board</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/trending" className="nav-link">Trending</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/about" className="nav-link">About</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/contact" className="nav-link">Contact</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav