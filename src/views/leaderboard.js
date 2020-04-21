import React, { Component } from 'react';
import LeaderboardHeader from '../components/leaderboard/leaderboardheader.js';
import ColumnHeader from '../components/leaderboard/columnheader.js';
import User from '../components/leaderboard/leaderboarduser.js';
import '../assets/sass/leaderboard.scss';

class Leaderboard extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
        this._clickAllTime = this._clickAllTime.bind(this);
        this._clickRecent = this._clickRecent.bind(this);
    }

    componentDidMount() {
        const fetchInit = {
            method: 'GET',
            mode: 'cors'
        };

        fetch(`${ this.props.apiURL }`, fetchInit)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    list: data
                });
            })
            .catch(err => console.log('fetch error : ', err))
    }

    _clickAllTime(e) {
        let sorted = this.state.list.sort((a, b) => b.alltime - a.alltime);
        this.setState(sorted);
    }

    _clickRecent(e) {
        let sorted = this.state.list.sort((a, b) => b.recent - a.recent);
        this.setState(sorted);
    }

    render() {
        let userlist = this.state.list.map((user, i) => <User username={ user.username } rank={ i + 1 } img={ user.img } recent={ user.recent } alltime={ user.alltime } />);

        return (
            <div className="row">
                <div className="col-12">
                    <section>
                        <h2 className="title text-center">Global Leaderboard</h2>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8">
                                <div className="d-flex justify-content-center">
                                    <div className="container leaderboard">
                                        <LeaderboardHeader />
                                        <ColumnHeader onClickAll={this._clickAllTime} onClick={this._clickRecent}/>
                                        { userlist }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        )
    }

}
export default Leaderboard

