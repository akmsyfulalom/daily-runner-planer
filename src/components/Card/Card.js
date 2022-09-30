import React, { useState } from 'react';
import User from '../User/User';

const Card = (props) => {
    console.log(props.runner)
    const { name, picture, description, time, age } = props.runner
    // const [addToLists, setAddToList] = useState(0)




    return (
        <div >
            <div className='border bg-white p-4 rounded-md'>
                <img className='rounded-md' src={picture} alt="" />
                <h3 className='font-bold text-xl my-3'>{name}</h3>
                <p>{description}</p>
                <p>For age <span className='font-bold'>{age}</span></p>
                <p>Time required <span className='font-bold'>{time}</span></p>
                <div className='text-center'>
                    <button className='bg-sky-400 py-2 px-14 mt-2 rounded-md font-bold ' onClick={() => props.addToUserList(time)}>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Card;