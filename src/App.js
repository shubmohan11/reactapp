// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
class Home extends Component {
constructor(){
  super();
  // this.state="Hello world";
  // this.state={
  //   title:"What is lorem",
  //   description:"It is the best so far",
  //   buttontext:"Sign up"
    
  // }

  this.state={
   mycards:[
    {
      id:1,
      title:"What is lorem 1",
      description:"It is the best so far",
      buttontext:"Sign up"
    },
    {
      id:2,
      title:"What is lorem 2",
      description:"It is the best so far",
      buttontext:"Sign up"
    },
    {
      id:3,
      title:"What is lorem 3",
      description:"It is the best so far",
      buttontext:"Sign up"
    }
   ]
    
  }

  }
 render(){
  const items=this.state.mycards.map(item => {
    return (
     
      <div className='card' key={item}>
        <div className='cardHeader'>{item.title}</div>      
        <div className='cardBody'>{item.description}</div>
        <div className='cardFooter'><button>{item.buttontext}</button></div>
      </div>
    
    );
   })
   return(
    <div className="App">
      {items}
    </div>
   )
    
  }
  
}


export default Home;
