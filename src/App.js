import React from 'react';
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom';
import Header from './containers/header';
import CoverIndex from './components/animationIndex';
// import Debraj from './components/debraj';
import RightContainer from './containers/rightcontainer';
import Sekar from './components/sekar';
import Notfound from './components/page_404';
import {Routes} from './components/routelist';
import { withTranslation } from 'react-i18next';


function App(props) {
  return (
    <Router basename="/fewsites">
        <Header/>
        <Switch>
        <Route exact  path='/fewsites' component={CoverIndex} />
        { Routes.map((routes)=> {return <Route path={routes.path} component={RightContainer} />})}
        { Routes[3].submenu.map((routes)=> {return <Route path={routes.path} component={RightContainer} />})}
        { Routes[4].submenu.map((routes)=> {return <Route path={routes.path} component={RightContainer} />})}
        { Routes[5].submenu.map((routes)=> {return <Route path={routes.path} component={RightContainer} />})}
        { Routes[6].submenu.map((routes)=> {return <Route path={routes.path} component={RightContainer} />})}
        { Routes[7].submenu.map((routes)=> {return <Route path={routes.path} component={RightContainer} />})}
        { Routes[8].submenu.map((routes)=> {return <Route path={routes.path} component={RightContainer} />})}
      
        <Route path='/sekar' component={Sekar} />
        <Route component={Notfound} />
        </Switch>
    </Router>
  );
}

export default withTranslation('common')(App); 
