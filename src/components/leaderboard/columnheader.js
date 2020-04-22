import React from "react";

const ColumnHeader = ({
                          onClick,
                          onClickAll
                      }) => {
    return (
        <div className="row colheader">
            <div className="col-xs-1 boardnumber">
                <h4>#</h4>
            </div>
            <div className="col-xs-5 boardname">
                <h4>Name</h4>
            </div>
            <div className="col-xs-3 recent">
                {/*<h4 onClick={onClick} >Last 30 days</h4>*/}
                <h4>Last 30 days</h4>
            </div>
            <div className="col-xs-3 alltime">
                {/*<h4 onClick={onClickAll} >All time</h4>*/}
                <h4>All time</h4>
            </div>
        </div>
    )
}
export default ColumnHeader