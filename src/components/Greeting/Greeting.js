import React from 'react';
import underline from '../../data/images/underline.png';


class Greeting extends React.Component{
    render(){
        return(
            <div className='greeting'>
                <div className='dcs'>
                    <h1 style = {{marginBottom:'0'}}>Dwight's<span>&nbsp;</span> Computer Solutions</h1>                   
                    <img alt= 'underline' src={underline} style={{lineHeight:'0'}} />              
                </div>
            </div>

            
            
        );
    }
}

export default Greeting;