import React from 'react';
import PhotoPage from './PhotoPage';
import { connect } from 'react-redux';
import { setPhotos, getPhotosByAlbum } from '../actions/photoAction';

class PhotoPageContainer extends React.Component {
    componentDidMount(){
        const albumId = this.props.match.params.id;
        console.log(`Now fetch photos for albumId = ${albumId}`);
        this.props.getPhotosByAlbum(albumId);
    }

    render(){
         if(!this.props.photos){
            return <p>Loading...</p>;
        }else{ 
            return <PhotoPage photos={this.props.photos}/>;
       }
    }
}

const mapStateToProps = (state) => {
    return {
        photos: state.photos
    };
}

export default connect(mapStateToProps, {setPhotos, getPhotosByAlbum})(PhotoPageContainer);
