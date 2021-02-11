import Home from './components/home';
import Header from './components/header';
import { Route } from 'react-router-dom';
import About from './components/about';

function App() {
  return (
    <div className="App">
        <Header/>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        
    </div>
  );
}

export default App;
