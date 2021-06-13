import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Aside from './components/Aside/Aside';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileContainer';
import Users from './components/Users/Users';

function App(props) {
  return (
      <div className="wrapper">
        <Header></Header>
        <Aside asideReducer={props.appState.asideReducer} ></Aside>
        <div className="content">
          <Route path="/profile" 
            render={ () => <ProfileContainer/> } />
          
          <Route path="/dialogs" 
            render={ () => <Dialogs dispatch={props.dispatch} 
                                    dialogsPage={props.appState.dialogsReducer} />} />
          
          <Route path="/news" component={ Profile } />
          <Route path="/music" component={ Profile } />
          <Route path="/settings" component={ Profile } />
          <Route path="/users" 
            render={ () => <Users/> } />
        </div>
      </div>
  );
}

export default App;
