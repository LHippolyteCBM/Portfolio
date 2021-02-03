import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Projects from './components/Home/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
        </Switch>
    </BrowserRouter>
  );
};

export default Router;
