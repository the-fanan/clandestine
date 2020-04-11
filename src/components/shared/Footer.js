import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<strong>Follow & Subscribe</strong>
			<div className="social">
				<a href="http://clandestine.com"><i className="fab fa-facebook-f"></i></a>
				<a href="http://clandestine.com"><i className="fab fa-instagram"></i></a>
				<a href="http://clandestine.com"><i className="fab fa-twitter"></i></a>
				<a href="http://clandestine.com"><i className="fab fa-youtube"></i></a>
				<a href="http://clandestine.com"><i className="fab fa-spotify"></i></a>
			</div>
			<hr/>
			<small>Copyright © 2020 Clandestine. All rights reserved.</small>
		</footer>
	)
}

export default Footer