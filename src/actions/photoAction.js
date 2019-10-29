export const SET_PHOTOS = 'SET_PHOTOS';

export function setPhotos(photos){
    return {
        type: 'SET_PHOTOS',
        payload: photos
    }
}

export const GET_PHOTOS_BY_ALBUM = 'GET_PHOTOS_BY_ALBUM';

export function getPhotosByAlbum(albumId){
    console.log(albumId);
    return function (dispatch) {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setPhotos(data))
            })
    };
}
