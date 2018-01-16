import React from 'react';

class Progress extends React.Component{
    render(){
        return(
            <div className="progressContainer">
                <div className="prepped">
                    <h4>Prepped</h4>
                    <button>X</button>
                </div>
                <div className="painted">
                    <h4>Painted</h4>
                    <button>X</button>
                </div>
                <div className="assembled">
                    <h4>assembled</h4>
                    <button>X</button>
                </div>
            </div>

        )
    }
}

export default Progress;