import React from 'react';

class Totals extends React.Component{
    constructor(){
        super();
        this.removeArea = this.removeArea.bind(this);
    }
    
    removeArea(){
        console.log('remove work area');
    }
    render(){
        return(
            <div className="totalsContainer">
                <div className="hours">
                    <h3>Total Project Hours</h3>
                    <h3>{this.props.finalHours}hrs</h3>
                </div>
                <div className="workAreaList">
                    <h3>Current Work Areas</h3>
                    <ul>
                        {this.props.areaList.map((area, i) => {
                            return (
                                <li key={area-i}>
                                    <h4>{area}</h4>
                                    {/* <button onClick={this.removeArea}>X</button> */}
                                </li>
                            )
                        })}     
                    </ul>
                </div>
            </div>
        )
    }
}

export default Totals;