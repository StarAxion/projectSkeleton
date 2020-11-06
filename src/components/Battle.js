import React, { Component } from 'react';
import PlayerInput from './PlayerInput';
import { Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';

class Battle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(id, username) {
        this.setState(() => {
            const newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = `https://github.com/${username}.png?size=200`;
            return newState;
        })
    }

    handleReset(id) {
        this.setState(() => {
            const newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Image'] = null;
            return newState;
        })
    }

    render() {
        const { playerOneName, playerTwoName, playerOneImage, playerTwoImage } = this.state;
        return (
            <div>
                <div className='row'>
                    {!playerOneName ?
                        <PlayerInput
                            id='playerOne'
                            label='Player One'
                            onSubmit={this.handleSubmit}
                        />
                        :
                        <div className='column'>
                            <PlayerPreview
                                avatar={playerOneImage}
                                username={playerOneName}
                            >
                                <button
                                    className='reset'
                                    onClick={() => this.handleReset('playerOne')}
                                >
                                    Reset
                            </button>
                            </PlayerPreview>
                        </div>
                    }

                    {!playerTwoName ?
                        <PlayerInput
                            id='playerTwo'
                            label='Player Two'
                            onSubmit={this.handleSubmit}
                        />
                        :
                        <div className='column'>
                            <PlayerPreview
                                avatar={playerTwoImage}
                                username={playerTwoName}
                            >
                                <button
                                    className='reset'
                                    onClick={() => this.handleReset('playerTwo')}
                                >
                                    Reset
                            </button>
                            </PlayerPreview>
                        </div>
                    }
                </div>

                {playerOneImage && playerTwoImage &&
                    <Link
                        to={{
                            pathname: this.props.match.url + '/results',
                            search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                        }}
                        className='button'
                    >
                        Battle
                    </Link>
                }
            </div>
        )
    }
}

export default Battle;
