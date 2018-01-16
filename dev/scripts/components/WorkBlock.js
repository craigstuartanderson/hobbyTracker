import React from 'react';

import Progress from './Progress'
import Hours from './Hours'


class WorkBlock extends React.Component{
    render(){
        return(
            <div className="workBlockContainer">
                <h4>Work Block</h4>
                <Progress />
                <Hours />
            </div>
        )
    }
}


export default WorkBlock;