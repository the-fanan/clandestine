import React, { Component } from 'react';

class Error404 extends Component {
	constructor(props) {
    super(props);
    this.state = {
    };
	}

	render() {
		return (
			<div className="row">
				<div className="col">
					<div className="error d-flex h-100">
						<div className="text-holder align-self-center">
							<h1>404</h1>
							<div className="d-flex justify-content-center">
								<p>Page <span>{this.props.location.pathname}</span> not found</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Error404;