import React from 'react';

const RepoGrid = ({ repos }) => (
    <ul className='popular-list'>
        {repos.map((repo, index) => (
            <li key={index} className='popular-list__item'>
                <div className='popular-list__item-rank'>#{index + 1}</div>
                <ul>
                    <li>
                        <img
                            src={repo.owner.avatar_url}
                            alt={'Avatar for ' + repo.owner.login}
                            className='avatar'
                        />
                    </li>
                    <li>
                        <a
                            href={repo.html_url}
                            target='_blank'
                            className='popular-list__item-name'
                        >
                            {repo.name}
                        </a>
                    </li>
                    <li>@{repo.owner.login}</li>
                    <li>{repo.stargazers_count} stars</li>
                </ul>
            </li>
        )
        )}
    </ul>
)

export default RepoGrid;
