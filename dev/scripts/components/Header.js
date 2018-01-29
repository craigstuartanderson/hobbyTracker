import React from 'react';

class Header extends React.Component{ 
    render(){
        return(
            <div className="headerContainer"> 
                <img src="./public/images/anchor.svg" alt=""/>
                {/* SVG created by Laymik from the Noun Project */}
                <div className="headerTitle">
                    <h1>Model Ship Build Tracker</h1>
                    <h3>HMS Victory - 1/350 scale</h3>
                </div>
                <div className="hoursContainer">
                    <h4>Total Hours</h4>
                    <h5>{this.props.finalHours}</h5>
                </div>
            </div>
        )
    }
}

export default Header;