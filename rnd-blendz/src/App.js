import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Shop from './Pages/Shop';

function App() {
  return (
  <div>
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </div>
    </Router>
    </div>
  );
}

export default App;