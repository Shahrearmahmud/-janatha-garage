import React from 'react';
import sleeping from '../../../images/sleepy mechanice.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping </h2>
            <img src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;