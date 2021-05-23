import React from 'react';
import reactDom from 'react-dom';
import App from './App';
import './index.css';
import { addMessage, addNewMessageText, addNewPostText, addPost, give, state } from './Redux/state';
import reportWebVitals from './reportWebVitals';

export let rerenderEntireTree = () => {
   reactDom.render(
      <React.StrictMode>
      <App addNewMessageText={ addNewMessageText } 
      addMessage={ addMessage } 
      addNewPostText={ addNewPostText } 
      appState={ state } 
      addPost={ addPost } />
      </React.StrictMode>,
      document.getElementById('root')
   );
}

rerenderEntireTree();

give(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

