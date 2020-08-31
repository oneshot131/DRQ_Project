import React from 'react'
import TvShows from './tvshows';
import axios from 'axios'; //imported for axios


class Read extends React.Component{

    state = {
        tvshows: []
    };
    
    componentDidMount() {
        axios.get('http://localhost:4000/api/tvshows') 
        .then((response)=> {
            this.setState({tvshows:response.data.tvshows})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    
    render(){
        const mystyle = {
            color: "blue",
            backgroundColor: "Black",
            padding: "50px",
            fontFamily: "Impact"
        };

        return(
            <div style={mystyle} className="App">
                <h1>Check out our hot list!</h1>
                
                <TvShows myTvShows={this.state.tvshows}></TvShows>
                
            </div>
        );
    }
}
export default Read;