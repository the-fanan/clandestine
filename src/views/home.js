import React, { Component } from 'react';
import { connect } from 'react-redux';
import SiteSocial from '../components/social/SiteSocial.js'

class Home extends Component {
	constructor(props) {
    super(props);
    this.state = {
    };
	}
	
	render(){
		return (
			<div className="row">
				<div className="col">
					<div className="row">
						<div className="col hero-col">
							<div className="hero d-flex h-100">
								<div className="text-holder align-self-center">
									<h1>Clandestine</h1>
									<div className="d-flex justify-content-center">
										<p>Clandestine is a Music sharing app for anonymous sharing of music recommendations with friends and competing for whose recommendations get the most repeat listens</p>
									</div>
									<SiteSocial/>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-12">
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	//auth: state.auth
});

function mapDispatchToProps(dispatch) {
  return {
		//showAlert: data => dispatch(showAlert(data)),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);