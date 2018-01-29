import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import WorkBlock from './components/WorkBlock';
import AddBlock from './components/AddBlock';
import Totals from './components/Totals';

class App extends React.Component {
    constructor(){
      super();
      this.state = {
				workArea: '',
        hours: 0,
        comments: '',
        log: [
					{
						workArea: 'Hull',
            hours: 4,
            comments: 'Sanded and painted below waterline.'
					}
        ], 
        runningTotal: 0     
			}
			
      this.addEntry = this.addEntry.bind(this);
			this.removeEntry = this.removeEntry.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.totalHours = this.totalHours.bind(this);
      this.areaList = this.areaList.bind(this);

    }
		
		handleChange(e) {
			this.setState({
				[e.target.name]: e.target.value
			})
		}

    addEntry(e) {
      e.preventDefault();

      this.totalHours();

			const newEntry = {
				workArea: this.state.workArea,
        hours: this.state.hours,
        comments: this.state.comments
      }
      const newLog = Array.from(this.state.log)
      newLog.push(newEntry);

      this.setState({
        workArea: '',
        hours: 0,
        comments: '',
        log: newLog,
      })
    }
	
    removeEntry(index){

      const editedLog = Array.from(this.state.log);

      editedLog.splice(index, 1);

      this.setState({
        log: editedLog
      })
    }

    totalHours(){
        
      return this.state.log
          .map((entry) => entry.hours)
          .reduce((tally, nextItem) => new Number(tally) + new Number(nextItem));
      }
    
    areaList(){
    
      const areaSet = new Set(this.state.log.map((entry) => entry.workArea));

      return Array.from(areaSet);

    
    }

        
    render() {
      return (
        <div className="appContainer">
          <header className="wrapper">
            <Header finalHours={this.totalHours()}/>
          </header>
          <main className="wrapper">
            <section className="inputSection">
							<form id="addEntry" onSubmit={this.addEntry}>
              <label htmlFor="workArea">Section:</label>
								<input type="text" name="workArea" value={this.state.workArea} onChange={this.handleChange} />
                <label htmlFor="hours">Hours:</label>
								<input type="number" name="hours" value={this.state.hours} onChange={this.handleChange} />
                <label htmlFor="comments">Notes:</label>
                <textarea name="comments" form="addEntry" value={this.state.comments} onChange={this.handleChange} cols="30" rows="10">Add notes...</textarea>
								<button>Log Hours</button>
							</form>
              <Totals finalHours={this.totalHours()} areaList={this.areaList()} />
            </section>
            <section className="outputSection">
              <ul className="workBoard">
                {this.state.log.map((entry, i) => {
                  return(
										<WorkBlock data={entry} key={`entry-${i}`} index={i} remove={this.removeEntry} />
                  )
                })}
              </ul>
            </section>
          </main>
          <footer className="wrapper">
            <Footer />
          </footer>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
