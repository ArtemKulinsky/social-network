import React from 'react';
import reactDom from 'react-dom'; 
import App from './App';
import './index.css';
import store from './Redux/state';
import reportWebVitals from './reportWebVitals';

export let rerenderEntireTree = () => {
   reactDom.render(
      <React.StrictMode>
      <App  appState={ store.getState() } 
            dispatch={ store.dispatch.bind(store) }
            // addNewMessageText={ (store.addNewMessageText).bind(store) } 
            // addMessage={ store.addMessage.bind(store) } 
            // addNewPostText={ store.addNewPostText.bind(store)} 
            // addPost={ store.addPost.bind(store) }
      />
      </React.StrictMode>,
      document.getElementById('root')
   );
}

rerenderEntireTree();

store.subcriber(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

