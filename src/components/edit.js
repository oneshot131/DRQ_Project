import React from 'react'; 
import '../App.css';
import axios from 'axios'; //to talk to the server 
import { thisExpression } from '@babel/types';

class Edit extends React.Component {

  constructor(props){
    super(props);

    this.state = {Title: '',
                  _id:'',
                  Poster: '',
                  Year: '',};


    this.handleChangeShowTitle = this.handleChangeShowTitle.bind(this);
    this.handleChangeShowPoster = this.handleChangeShowPoster.bind(this);
    this.handleChangeShowYear = this.handleChangeShowYear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeShowTitle(e) {
    this.setState({Title: e.target.value});
  }

  handleChangeShowPoster(e) {
    this.setState({Year: e.target.value});
  }

  handleChangeShowYear(e) {
    this.setState({Poster: e.target.value});
  }

  handleSubmit(e) {
    alert( 'Tv Show:  ' + this.state.Title + "  "  + this.state.Poster + "  " + this.state.Year);
    e.preventDefault();

    const newShow = {
      title:this.state.Title,
      year:this.state.Poster,
      poster:this.state.Year
    }

    axios.put('http://localhost:4000/api/TvShows/' + this.state._id, newShow) 
    .then()
    .catch()

    this.setState({Title:'',
                  Poster:'',
                  Year:'',
                  });
    
  }


  componentDidMount(){
 alert(this.props.match.params.id) 
    axios.get('http://localhost:4000/api/TvShows/'+ this.props.match.params.id) 
    .then((Response)=>{
      this.setState({
          _id:Response.data._id,
          Title:Response.data.title,
          Poster:Response.data.poster,
          Year:Response.data.year
      });
    })
    .catch();
  }


  render() {
    return (
      <div className="App">
      <b><h1 style={{color: "blue"}}>Why not edit a current TV Series{this.state.Title}</h1></b>
      <form onSubmit={this.handleSubmit}>

      <div className='form-group'>
      <b><label style={{color: "blue"}}>
        Tv Show title:
        </label></b>
        <input type="text" 
        className= 'form-control'
        value={this.state.Title}
         onChange={this.handleChangeShowTitle} />
    </div>

    <div className = 'form-group'>
        <b><label style={{color: "blue"}}>
          Tv Show Poster URL:
          </label></b>
          <textarea
          rows='3'
          className='form-control'
          value={this.state.Poster}
          onChange={this.handleChangeShowPoster}></textarea>
      </div>

      <div className='form-group'>
      <b><label style={{color: "blue"}}>
        Tv Show Year:
        </label></b>

        <input type="text" 
        className= 'form-control'
        value={this.state.Year}
         onChange={this.handleChangeShowYear} />
      </div>

        <input type="submit" value="Submit" />

      </form>
      </div>
    );
  }
}

export default Edit;