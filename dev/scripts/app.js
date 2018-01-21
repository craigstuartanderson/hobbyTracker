import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import WorkBlock from './components/WorkBlock';
import AddBlock from './components/AddBlock';

class App extends React.Component {
    constructor(){
      super();
      this.state = {
				workArea: '',
				hours: '',
        log: [
					{
						workArea: 'hull',
						hours: '4'
					}
				],      
			}
			
      this.addEntry = this.addEntry.bind(this);
			this.removeEntry = this.removeEntry.bind(this);
			this.handleChange = this.handleChange.bind(this);

    }
		
		handleChange(e) {
			this.setState({
				[e.target.name]: e.target.value
			})
		}

    addEntry() {

			const newEntry = {
				workArea: this.state.workArea,
				hours: this.state.hours
			}

      const newLog = Array.from(this.state.log)

      newLog.push(newBlock)

      this.setState({
        log: newLog
      })
    }
	
			removeEntry(index){
	
				const editedLog = Array.from(this.state.log);
	
				editedLog.splice(index, 1);
	
				this.setState({
					log: editedLog
				})
		}


      
    
    
    render() {
      return (
        <div className="appContainer">
          <header>
            <Header />
          </header>
          <main>
            <section className="inuptSection">
							{/* <AddBlock add={this.addEntry} /> */}
							<form onSubmit={this.addEntry}>
								<input type="text" name="workArea" onChange={this.handleChange} />
								<input type="text" name="hours" onChange={this.handleChange} />
								<button>Log Hours</button>
							</form>
            </section>
            <section className="outputSection">
              <ul>
                {this.state.log.map((entry, i) => {
                  return(
										<WorkBlock data={entry} key={`entry-${i}`} index={i} remove={this.removeEntry} />
                  )
                })}
              </ul>
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
