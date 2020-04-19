import React from "react";

const LeaderboardUser = ({ rank, img, username, recent, alltime }) => {
    return (
        <div className="row users  vcenter">
            <div className="col-xs-1 rank">
                <h4>{ rank }</h4>
            </div>
            <div className="col-xs-5 name">
                <img src={ img } alt='avatar' /> <a href={`https://www.freecodecamp.com/${username}`}  target="_blank">{ username }</a>
            </div>
            <div className="col-xs-3">
                <h4>{ recent }</h4>
            </div>
            <div className="col-xs-3">
                <h4>{ alltime }</h4>
            </div>
        </div>
    )
}

export default LeaderboardUser