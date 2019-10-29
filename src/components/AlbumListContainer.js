import React from "react";
import AlbumList from "./AlbumList";
import { connect } from "react-redux";
import { helloWorld, addAlbum, setAlbum, getAlbum, createAlbum } from '../actions/test';
import AddAlbumForm from "./AddAlbumForm";

/* const sleep = time => new Promise( resolve => {
    console.log(time)
    setTimeout(()=> {

        resolve(`I waited for ${time} milliseconds`);
    }, time)
} ); */

class AlbumListContainer extends React.Component {
  state = {}

  componentDidMount() {
    this.props.getAlbum();
    /* sleep(2000)
      .then(message => this.props.setAlbum([
        {
          id: 1,
          title: message
        },
        {
          id: 2,
          title: "This is the second album"
        },
        {
          id: 3,
          title: "The last album"
        }
      ]))
    
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => this.setState({ albums: data })); */
  
    //this.props.dispatch(helloWorld());
    /* this.props.helloWorld('Alice','Seriously Alice');
    this.props.addAlbum(5,'Enjoying sunshine');
    this.props.addAlbum(10,'Having fun in the US'); */
    
  }

  /* addAlbum = (id, title) => {
      this.props.dispatch({
          type: 'ADD_ALBUM',
          payload: id, title
      })
  } */
   

  render() {
    if (!this.props.albums) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
           <AlbumList albums={this.props.albums} />
           <AddAlbumForm createAlbum={this.props.createAlbum} />
        </div>
      ) 
     
    }
  }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}

// export default connect(null, {helloWorld: helloWorld})(AlbumListContainer);
export default connect(mapStateToProps, {helloWorld, addAlbum, setAlbum, getAlbum, createAlbum})(AlbumListContainer);