import React from 'react';
import PlayerPreview from './PlayerPreview';

const Profile = ({ profile }) => (
        <PlayerPreview
            username={profile.login}
            avatar={profile.avatar_url}
        >
            <ul className='space-list-items'>
                {profile.name && <li>{profile.name}</li>}
                {profile.location && <li>{profile.location}</li>}
                {profile.company && <li>{profile.company}</li>}
                <li>Followers: {profile.followers}</li>
                <li>Following: {profile.following}</li>
                <li>Public Repos: {profile.public_repos}</li>
            </ul>
        </PlayerPreview>
)

export default Profile;