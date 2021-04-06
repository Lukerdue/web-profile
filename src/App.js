import Home from './components/home';
import Header from './components/header';
import { Route, Switch } from 'react-router-dom';
import About from './components/about';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Switch>
        <Header/>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path='/'>
        <Home/>
        </Route>
        </Switch>
        
    </div>
  );
}

export default App;
