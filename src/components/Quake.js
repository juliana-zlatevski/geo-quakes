import React from 'react';
import QuakeList from './QuakeList';

const Quake = (props) => {
    console.log(props);
    return(
        <div>
            <QuakeList />
        </div>
    )
}

export default Quake;