import './app.css';
import Home from "./pages/Home";
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Books from "./pages/Books";


function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/books" exact component={Home} />
      <Route path="/books" component={Books} />
    <Nav />
    <Home />
    <Footer />
    </div>
    </Router>
  );
}

export default App;
