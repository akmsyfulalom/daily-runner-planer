import React from 'react';
import User from '../User/User';

const Card = (props) => {
    console.log(props.runner)
    const { name, picture, description, time, age } = props.runner

    return (
        <div >
            <div className='border bg-white p-4'>
                <img src={picture} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{age}</p>
                <p>{time}</p>
                <button>Add to list</button>
            </div>
        </div>
    );
};

export default Card;