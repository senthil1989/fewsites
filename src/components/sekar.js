import React from 'react';


function Sekar(props){
    const onSubmit = () => {
        props.history.push('/')
      } 
        return (
          <form>
            <input placeholder="name" type="name" />
            <input placeholder="email" type="email" />
            <button onClick={onSubmit}>Submit</button>
          </form>
        )
      
}

export default Sekar;