import Home from './components/home';
import Header from './components/header';
import { Route } from 'react-router-dom';
import About from './components/about';
import Projects from './components/projects';

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
        <Route path="/projects">
          <Projects/>
        </Route>
        
    </div>
  );
}

export default App;
