import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import User from '../User/User';

const RunnerData = () => {
    const [runners, setRunners] = useState([]);
    const [exerciseTime, setExerciseTime] = useState(0)
    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setRunners(data))
    }, [])

    const addToUserList = (time) => {
        setExerciseTime(time + exerciseTime)
    }

    return (
        <div className='flex'>
            <div className='grid grid-cols-3 gap-6 flex-auto w-[60%] px-20  py-10'>
                {
                    runners.map(runner => <Card runner={runner} addToUserList={addToUserList}></Card>)
                }


            </div>
            <div className='flex-1'>
                <User exerciseTime={exerciseTime}>

                </User>
            </div>
        </div>
    );
};

export default RunnerData;