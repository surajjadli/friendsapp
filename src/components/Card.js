import React from 'react';

const Card = ({name, mobile}) => {
 return(
 	<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
 	<img src='https://robohash.org/test?size=200x200' alt="robopic" />
 	<div>
 	<h2>{name}</h2>
 	<p>{mobile}</p>
 	</div>
 	</div >
 	);
}

export default Card;