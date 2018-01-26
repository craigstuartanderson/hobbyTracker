import React from 'react';

// this component builds what is in each block

class AddBlock extends React.Component{
    constructor(){
        super();
        this.state = {
            workArea:'',
            hours: '',
        }
        
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    reset(){
        this.setState({
            workArea: '',
            hours: ''
        })
    }
 
    render(){
        return(
            <form onSubmit={() => this.props.add(this.state)}>
                <input type="text" name="workArea" onChange={this.handleChange} />
                <input type="text" name="hours" onChange={this.handleChange} />
                <button>Log Hours</button>
            </form>
        )
    }
}

export default AddBlock;