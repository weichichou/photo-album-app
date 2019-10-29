import React from 'react';
import { Link } from 'react-router-dom';

export default function PhotoPage(props){
    console.log(props)
    return(
        <div>
            <Link to='/'><h3>Go back to index</h3></Link> 
            <h1>Photos in this album</h1>
            {props.photos.map(photo => 
            <img src={photo.thumbnailUrl} alt={photo.id}/>)}
        </div>
    );
}