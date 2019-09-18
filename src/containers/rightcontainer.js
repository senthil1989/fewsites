import React from 'react';
import Container from '@material-ui/core/Container';
import RightContent from '../components/rightcontent'

const renderContent=(match)=>{
  console.log(match);
  if(match.url=="/debraj"){
    return <RightContent />
  }

}

function RightContainer(props){
  const {match}=props;
  console.log(match)
  return(
    <Container maxWidth="lg">
    <div className="s-container">
        {renderContent(match)}
      </div>
    </Container> 
  )
}

export default RightContainer;