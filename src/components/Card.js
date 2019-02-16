import React from 'react';


const Card = ({name,id,email}) =>{
    return(
        <div className="tc bg-light-green br3 pa3 ma2 dib grow bw2 shadow-5 " >
            <img width="200" height="200" alt="roboPic" src={`https://robohash.org/${id}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}








export default Card;