import React from 'react'

class Hours extends React.Component{
    render(){
        return(
            <div className="hoursContainer">
                <form action="">
                    <input type="text"/>
                </form>
                <button>submit</button>
                <div className="totalHours">
                    <h3>0</h3>
                </div>
            </div>

        )
    }
}

export default Hours;
