import React from 'react';

import WorkBlock from './WorkBlock';

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <ul>
                {this.state.toDos.map((item, i) => {
                    return <Workblock data={item} key={`item-${i}`} remove={this.removeFromList} toDoIndex={i} />
                })}
            </ul>
        )
    }
}

export default Dashboard;