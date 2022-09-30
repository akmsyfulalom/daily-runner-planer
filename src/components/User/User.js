import React, { useEffect, useState } from 'react';
import user from '../../images/user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './User.css'

const User = (props) => {
    const [breackTime, setBreackTime] = useState(0)


    const addToBreackTime = (time) => {
        setBreackTime(time)
        localStorage.setItem('breack-time', time);

    }
    useEffect(() => {
        const storedTime = localStorage.getItem('breack-time');
        setBreackTime(storedTime)
    }, [])

    return (
        <div className='bg-white p-10 rounded fixed top-0 right-0 z-10'>
            <div className='flex '>
                <img className='w-14 rounded-full mr-4' src={user} alt="" />
                <div>
                    <h1 className='font-semibold text-2xl	' >AKM SYFUL</h1>
                    <p><FontAwesomeIcon icon={faLocationDot} /> Sylhet, BD</p>
                    <p>  </p>
                </div>

            </div>
            <div className='flex mt-10 justify-between  px-5 py-3 bg-[#F2F4FA] rounded'>
                <div className='mr-5'>
                    <p><span className='font-bold text-2xl	'>75</span>kg</p>
                    <p>Weight</p>
                </div>
                <div className='mr-5'>
                    <p className='font-bold text-2xl'>6.5</p>
                    <p>Height</p>
                </div>
                <div>
                    <p><span className='font-bold text-2xl'>25</span>yer</p>
                    <p>Age</p>
                </div>
            </div>
            <h1 className='my-3 font-bold text-2xl'>Add A Break
            </h1>
            <div className='flex bg-[#F2F4FA] px-5 py-3 rounded'>
                <button onClick={() => addToBreackTime(10)}><p className='mr-3 bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white '><span className='font-bold'>10</span>S</p></button>
                <button onClick={() => addToBreackTime(20)}><p className='mr-3 bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white '><span className='font-bold'>20</span>S</p></button>
                <button onClick={() => addToBreackTime(30)}><p className='mr-3 bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white'><span className='font-bold'>30</span>S</p></button>
                <button onClick={() => addToBreackTime(40)}><p className='mr-3 bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white'><span className='font-bold'>40</span>S</p></button>
                <button onClick={() => addToBreackTime(50)}><p className='mr-3 bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white'><span className='font-bold'>50</span>S</p></button>
            </div>

            <h1 className='my-3 font-bold text-2xl'>Exercise Details
            </h1>
            <div className='flex justify-between px-5 py-5 rounded bg-[#F2F4FA]'>
                <h1 className='font-bold text-xl'>Exercise time</h1>
                <p className='text-slate-400'>{props.exerciseTime} minutes</p>
            </div>
            <div className='mt-10'>
                <div className='flex justify-between px-5 py-5 rounded bg-[#F2F4FA]'>
                    <h1 className='font-bold text-xl'>Break time</h1>
                    <p className='text-slate-400'>{breackTime} Seconds</p>
                </div>
            </div>
            <div className='text-center'>
                <button className='font-bold  bg-blue-500  mt-5  py-3 px-24 rounded items-center '>Activity Completed
                </button>
            </div>
        </div>
    );
};

export default User;