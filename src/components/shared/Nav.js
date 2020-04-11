import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
	return (
		<nav className="cl-nav">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-3">
						<div className="banner d-flex justify-content-end">
							<NavLink to="/">Clandestine</NavLink>
						</div>
					</div>

					<div className="col-9 d-flex justify-content-end">
						<ul className="nav">
							<li className="nav-item">
								<NavLink to="/auth" className="nav-link">Login / Sign Up</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/global-leader-board" className="nav-link">Leader Board</NavLink>
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