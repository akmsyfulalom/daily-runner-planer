import React from 'react';
import user from '../../images/user.jpg'

const User = () => {
    return (
        <div>
            <div className='flex '>
                <img className='w-14 rounded-full mr-4' src={user} alt="" />
                <div>
                    <h1 className='font-semibold text-2xl	' >AKM SYFUL</h1>
                    <p>Sylhet, BD</p>
                </div>

            </div>
        </div>
    );
};

export default User;