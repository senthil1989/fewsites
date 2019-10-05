import React from 'react';
import Container from '@material-ui/core/Container';
import RightContent from '../components/rightcontent';
import {Routes} from '../components/routelist';


function RightContainer(props){
  return(
    <Container maxWidth="lg">
    <div className="s-container">
        <RightContent {...props} routes={Routes} />
      </div>
    </Container> 
  )
}

export default RightContainer;