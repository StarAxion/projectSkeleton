import React from 'react';
import Profile from './Profile';

const Player = (props) => (
    <div className='column'>
        <div className='header'>
            <h2>{props.label}</h2>
            <h3>Score: {props.score}</h3>
        </div>
        <Profile profile={props.profile} />
    </div>
)

export default Player;
