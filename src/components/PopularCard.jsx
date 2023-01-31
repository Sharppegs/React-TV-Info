import React from 'react'


function PopularCard(props) {   

    return (
    <div className='popular-card' onClick={props.onClick}>
        <img src={props.image} />
        <h4 dangerouslySetInnerHTML={{__html: props.name}}></h4> 
    </div>   

      )




  
}

export default PopularCard