import React from 'react';
import Background from './components/Background/Background';
import Greeting from './components/Greeting/Greeting'
import './App.css';
import GridMenu from './components/GridMenu/GridMenu';
import ContactUs from './components/ContactUs/ContactUs';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      route: 'contactUs'
    }
  }
  
  onRouteChange = (route) => {
    this.setState({
      route: route
    });
  }

  render(){  
    const {route} = this.state;
    
  
  return (
    <div className="App">
      <Background/>   
      <Greeting /> 
      <GridMenu onRouteChange={this.onRouteChange}/>
      {route === 'contactUs'
      ?<ContactUs onRouteChange={this.onRouteChange}/>
      :<div></div>
      }   
    </div>
  );
  }
}

export default App;