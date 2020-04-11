import React, { Component } from 'react';
import { connect } from 'react-redux';
import SiteSocial from '../components/social/SiteSocial.js';
import Release from '../components/music/Release.js'
import releasesData from '../data/releases.js';

class Home extends Component {
	constructor(props) {
    super(props);
    this.state = {
    };
	}
	
	render(){
		const releases = releasesData.map((release, index) => 
		<li  key={index}>
			<Release release={release}/>
		</li>);
		return (
			<div className="row">
				<div className="col">
					<div className="row">
						<div className="col hero-col">
							<div className="hero d-flex h-100">
								<div className="text-holder align-self-center">
									<h1>Clandestine</h1>
									<div className="d-flex justify-content-center">
										<p>Clandestine is a Music sharing app for anonymous sharing of music recommendations with friends and competing for whose recommendations gets the most repeat listens</p>
									</div>
									<SiteSocial/>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-12">
							<section>
								<h2 className="title text-center">Trending Releases</h2>
								<div className="row justify-content-center">
									<div className="col-12 col-md-8">
										<ol className="releases-list">
											{releases}
										</ol>
										
									</div>
								</div>
							</section>
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