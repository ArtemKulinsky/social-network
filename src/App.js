import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Aside from './components/Aside/Aside';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import { Profile } from './components/Profile/Profile';

function App(props) {
  return (
      <div className="wrapper">
        <Header></Header>
        <Aside asideReducer={props.appState.asideReducer} ></Aside>
        <div className="content">
          <Route path="/profile" 
            render={ () => <Profile dispatch={props.dispatch} 
                                    profilePage={props.appState.profileReducer} /> } />
          
          <Route path="/dialogs" 
            render={ () => <Dialogs dispatch={props.dispatch} 
                                    dialogsPage={props.appState.dialogsReducer} />} />
          
          <Route path="/news" component={ Profile } />
          <Route path="/music" component={ Profile } />
          <Route path="/settings" component={ Profile } />
        </div>
      </div>
  );
}

export default App;
