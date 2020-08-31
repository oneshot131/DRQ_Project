import React from 'react';
import Card, { CardImgOverlay } from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; //added for delete button for movie line 25 //needed for delete button
import axios from 'axios'; //for delete button
import{Link} from 'react-router-dom'; //for being able to change url /edit for edit button

class TvShowItem extends React.Component{

constructor(){
  super();
  this.DeleteTvShow = this.DeleteTvShow.bind(this);
}

DeleteTvShow(e){
 console.log("delete clicked");

 axios.delete('http://localhost:4000/api/tvshows/'+this.props.tvshow._id) //returns a promise that its deleted
  .then(window.location.reload())
  .catch();
}
    render(){
        return(
            <div className="cardsDiv"> {}    

 <Card border="primary" bg="warning" text="black"> 
  <Card.Img align="center" varient="top" src={this.props.tvshow.poster}/>
 
    <Card.Header>{this.props.tvshow.title}</Card.Header>
      <Card.Body>
      <blockquote className="blockquote mb-0">
        <footer>
          {this.props.tvshow.year}                     
          </footer>
      </blockquote>
    </Card.Body>
    <Link text="black" to={"/edit/"+this.props.tvshow._id} className="btn btn-primary">Make a change?</Link> 
    <Button text="black" variant="danger" onClick={this.DeleteTvShow}>Want to delete</Button>
    

</Card>        
                
<br/>
            </div>
        )
    }
}
export default TvShowItem;