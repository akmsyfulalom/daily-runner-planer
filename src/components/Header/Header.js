
import React from 'react';
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className='flex py-10 ml-20'>
            <img className='w-20' src={logo} alt="" />
            <h1 className='text-5xl font-bold text-slate-700'>Daily Runner planner</h1>
        </div>
    );
};

export default Header;