import React from 'react';
import reactDom from 'react-dom'; 
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MyApp from './App';
import App from './App';
import './index.css';
import store from './Redux/redux-store';
import reportWebVitals from './reportWebVitals';

export let rerenderEntireTree = (state) => {
   reactDom.render(
      <React.StrictMode>
         <MyApp appState={ state } dispatch={ store.dispatch.bind(store) } />
      {/* <BrowserRouter>
         <Provider store={store}>
            <App   />
         </Provider>
      </BrowserRouter> */}
      </React.StrictMode>,
      document.getElementById('root')
   );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
   rerenderEntireTree(store.getState())
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

