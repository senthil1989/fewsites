import React from 'react';
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom';
import Header from './containers/header';
import Counter from './components/Counter';
import Debraj from './components/debraj';
import Sekar from './components/sekar';
import Notfound from './components/page_404';
function App() {
  return (
    <Router>
        <Header />
        <Switch>
        <Route exact  path='/' component={Counter} />
        <Route path='/debraj' component={Debraj} />
        <Route path='/sekar' component={Sekar} />
        <Route component={Notfound} />
        </Switch>
    </Router>
  );
}

export default App;
