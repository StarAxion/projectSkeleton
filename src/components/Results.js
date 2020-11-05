import React, { Component } from 'react';
import qs from 'query-string';
import { battle } from '../service/api';
import { Link } from 'react-router-dom';
import Player from './Player';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            loser: null,
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        const players = qs.parse(this.props.location.search);
        
        battle([
            players.playerOneName,
            players.playerTwoName
        ]).then(players => {
            if(!players) {
                return this.setState({ 
                    error: 'Check both users on GitHub',
                    loading: false
                })
            }

            this.setState({
                winner: players[0],
                loser: players[1],
                error: null,
                loading: false
            })
        })
    }

    render() {
        const { winner, loser, loading, error } = this.state;

        if(loading) {
            return <p style={{ textAlign: 'center' }}>Loading ...</p>
        }

        if(error) {
            return (
                <div>
                    <p>{error}</p>
                    <Link to='/battle'>Reset</Link>
                </div>
            )
        }

        return (
            <div className='row'>
                <Player
                    label='Winner'
                    score={winner.score}
                    profile={winner.profile}
                />
                <Player 
                    label='Loser'
                    score={loser.score}
                    profile={loser.profile}
                />
            </div>
        )
    }
}

export default Results;