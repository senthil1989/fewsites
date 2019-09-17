import React from 'react';
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom';
import Header from './containers/header';
import CoverIndex from './components/animationIndex';
// import Debraj from './components/debraj';
import AsideBar from './containers/asidebar';
import Sekar from './components/sekar';
import Notfound from './components/page_404';
import { withTranslation } from 'react-i18next';
function App() {
  return (
    <Router>
        <Header/>
        <Switch>
        <Route exact  path='/' component={CoverIndex} />
        <Route path='/debraj' component={AsideBar} />
        <Route path='/sekar' component={Sekar} />
        <Route component={Notfound} />
        </Switch>
    </Router>
  );
}

export default withTranslation('common')(App); 
