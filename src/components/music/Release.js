import React from "react";

const Release = ({release}) => {
	const sources = release.sources.map((source, index) =>
	<a key={index} href={source.link}> 
		<i className={"fab fa-" + source.name.toLowerCase()}></i>
		{source.name.charAt(0).toUpperCase() + source.name.slice(1).toLowerCase()}
	</a>)
	return (
		<article className="release">
			<div className="image-holder">
				<img src={release.image} alt="Release Cover"/>
			</div>
			<h6>{release.title} - {release.artiste}</h6>
			<div className="date">{release.year} &sdot; {release.type.charAt(0).toUpperCase() + release.type.slice(1).toLowerCase()}</div>
			<div className="sources">Listen: <ul>{sources}</ul></div>
		</article>
	)
}

export default Release