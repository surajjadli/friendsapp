import React from 'react';
import  Card from './Card';

const CardList = ({friends}) => {
	return(
		<div>
		{
		friends.map((user,i) => {
		return (
		<Card
		 key={i} 
		 name={friends[i].name}
		  mobile={friends[i].mobile}/>
	    );
		})
	    }
		</div>
		);
} 

export default CardList;