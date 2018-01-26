import React from 'react';

import Progress from './Progress'
import Hours from './Hours'


class WorkBlock extends React.Component{

    render(){
        return(
            <li className="workBlockContainer" >
                <h4>Work Section: {this.props.data.workArea}</h4>
                <h4>Work Hours: {this.props.data.hours}</h4>
                <p>Notes: {this.props.data.comments}</p>
                <button onClick={() => this.props.remove(this.props.index)}>X</button>
            </li>
        )
    }
}


export default WorkBlock;