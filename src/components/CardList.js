import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    const cardLoop = robots.map((robot, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} /> 
    })
    return(
        <div>
            {cardLoop}
        </div>
    )
}







export default CardList