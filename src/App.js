import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import AlbumListContainer from './components/AlbumListContainer';
import { Route } from 'react-router-dom';
import PhotoPageContainer from './components/PhotoPageContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Route exact path="/" component={AlbumListContainer} />
      <Route exact path='/albums/:id' component={PhotoPageContainer} />
      </div>
    </Provider>
  );
}

export default App;
