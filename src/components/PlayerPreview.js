import React from 'react';

const PlayerPreview = (props) => (
    <div className='player-info'>
        <img
            src={props.avatar}
            alt={`Avatar for ${props.username}`}
            className='avatar'
        />
        <h2 className='username'>{props.username}</h2>
        {props.children}
    </div>
)

export default PlayerPreview;
