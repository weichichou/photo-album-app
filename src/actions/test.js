// Why do we need to const this?
export const NEW_HELLO_WORLD = "NEW_HELLO_WORLD";

export function helloWorld(firstName, lastName) {
    return {
      type: "NEW_HELLO_WORLD",
      payload: {
        firstName: firstName,
        lastName: lastName
      }
    }
  }

export const ADD_ALBUM = 'ADD_ALBUM';

export function addAlbum(id, title){
    return {
        type: 'ADD_ALBUM',
        payload: {
            id: id,
            title: title
        }
    }
}

export const SET_ALBUM = 'SET_ALBUM';

export function setAlbum(albums){
    return {
        type: 'SET_ALBUM',
        payload: albums
    }
}

export const GET_ALBUM = 'GET_ALBUM';

export function getAlbum(){
    return function (dispatch){
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then(data => {
            dispatch(setAlbum(data))
      });
    }
}

export const CREATE_ALBUM = 'CREATE_ALBUM';

export function createAlbum(title){
    return function (dispatch){
        fetch("https://jsonplaceholder.typicode.com/albums",{
            method: 'post',
            body: JSON.stringify({title})
        })
          .then(res => res.json())
          .then(data => {
            dispatch(addAlbum(data.id, title));
          })
    }
}

// Can also write in this way:
/* export const createAlbum = title => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "post",
      body: JSON.stringify({ title })
    })
      .then(res => res.json())
      .then(data => {
        dispatch(addAlbum(data.id, title));
      });
  } */