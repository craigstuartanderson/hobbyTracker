import React from 'react';

class AddBlock extends React.Component{
    constructor(){
        super();
        this.state = {
            Log:[
                    {  
                        workArea: 'Hull', 
                        hours: 4
                    },
                    {  
                        workArea: 'Deck',
                        hours: 2
                    },
                
                ],
            
            newEntry: {
                workArea: '',
                hours: 0

            }
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.addToList = this.addToList.bind(this);
    }
    handleChange(e){
        this.setState({
            newLog: e.target.value
        })
    }
    addToList(logEntry){
        const newLog = Array.from(this.state.log)

        newLog.push(logEntry)

        this.setState({
            log: newLog
        })
    }
    render(){
        return(
            <form onSubmit={this.addToList}>
                <input type="text" name="workArea" value={this.state.log.workArea} onChange={this.handleChange} />
                <input type="text" name="hours" value={this.state.log.hours} onChange={this.handleChange}/>
                <button>Log Hours</button>
            </form>

        )
    }
}

export default AddBlock;