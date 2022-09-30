import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import User from '../User/User';

const RunnerData = () => {
    const [runners, setRunners] = useState([]);
    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setRunners(data))
    }, [])


    return (
        <div className='flex'>
            <div className='grid grid-cols-3 gap-6 flex-auto w-[60%] px-20  py-10'>
                {
                    runners.map(runner => <Card runner={runner}></Card>)
                }

            </div>
            <div className='flex-1'>
                <User>
                    <h1>user</h1>
                </User>
            </div>
        </div>
    );
};

export default RunnerData;