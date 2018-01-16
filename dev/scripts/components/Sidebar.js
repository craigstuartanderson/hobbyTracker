import React from 'react';

import AddBlock from './Addblock';
import Totals from './Totals';

class Sidebar extends React.Component{
    render(){
        return(
            <div className="sidebarContainer">
                <Totals />
                <AddBlock />
            </div>

        )
    }
}

export default Sidebar;