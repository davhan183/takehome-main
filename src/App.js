import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import AppContainer from './components/AppContainer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <AppContainer />
      </div>
    </Router>
  );
}

export default App;
