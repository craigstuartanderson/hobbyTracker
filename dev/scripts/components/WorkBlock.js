import React from 'react';

import Progress from './Progress'
import Hours from './Hours'


class WorkBlock extends React.Component{
    constructor(){
        super();

        this.toggleProgress = this.toggleProgress.bind(this);
    }

    toggleProgress(e){
        e.preventDefault();

    }

    render(){
        return(
            <li className="workBlockContainer" >
                <div className="workBlockTitle">
                    <img src="./public/images/shipWind.png" alt=""/>
                    {/* <h3>Work</h3> */}
                    <div className="workBlockHeading">
                        <h4>Section: {this.props.data.workArea}</h4>
                        <h4>Hours: {this.props.data.hours}</h4>
                    </div>
                </div>
                <p>Notes: {this.props.data.comments}</p>
                <button onClick={() => this.props.remove(this.props.index)}>Remove</button>
                {/* <button onClick={this.toggleProgress}>In Progress</button> */}
            </li>
        )
    }
}


export default WorkBlock;