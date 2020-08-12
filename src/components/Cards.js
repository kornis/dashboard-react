import React from 'react';

import CardItem from './CardItem';

function Cards(props) {
	return (

		<>
			{props.items.map((item, i) => <CardItem key={item.title + i} color={item.color} title={item.title} number={item.number} icon={item.icon} />)}


		</>
	);
}



export default Cards;
