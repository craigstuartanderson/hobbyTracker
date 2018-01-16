import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

class App extends React.Component {
    constructor(){
      super();
      this.state = {
        craig: 'craig'
      }
    }
    
    render() {
      return (
        <div className="appContainer">
          <header>
            <Header />
          </header>
          <main>
            <Sidebar />
            <Dashboard />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
