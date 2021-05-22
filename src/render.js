import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { addPost, addText } from './Redux/state';
import reportWebVitals from './reportWebVitals';

export let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
      <App addText={addText} appState={state} addPost={ addPost } />
      </React.StrictMode>,
      document.getElementById('root')
   );
}