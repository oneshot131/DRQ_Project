import React from 'react';
import '../App.css';

class Contact extends React.Component {



  render() {
    return (
      <div style={{backgroundColor: "lightblue"}} className="App">
       <b> <i> <h1 style={{color: "blue"}}>You are now on the contact page!</h1>
        <h2 style={{color: "blue"}}>To get in touch with us!</h2>
        <br></br>
        <h3 style={{color: "blue"}}>Phone: 0871234567</h3>
        <h3 style={{color: "blue"}}>Email: example@gmit.ie</h3>
        <a href ="https://github.com/oneshot131"><h3 style={{color: "blue"}}>Github: https://github.com/oneshot131</h3></a>
        <br></br>
        <h2 style={{color:"blue"}}>Check out our social media:</h2>
        <a href ="https://www.facebook.com/"><h3 style={{color:"blue"}}>Facebook</h3></a>
        <a href ="https://twitter.com/"><h3 style={{color:"blue"}}>Twitter</h3></a>
        <a href ="https://www.instagram.com/"><h3 style={{color:"blue"}}>Instagram</h3></a>
        </i> 
        </b> 
        
      </div>
    );
  }
}

export default Contact;