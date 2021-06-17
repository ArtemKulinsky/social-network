import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Aside from './components/Aside/Aside';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import HeaderContainer from './components/Header/HeaderContainer';
import { Profile } from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileContainer';
import Users from './components/Users/Users';

function App(props) {
  return (
      <div className="wrapper">
        <HeaderContainer></HeaderContainer>
        <Aside asideReducer={props.appState.asideReducer} ></Aside>
        <div className="content">
          <Route path="/profile/:userId?" 
            render={ () => <ProfileContainer/> } />
          
          <Route path="/dialogs" 
            render={ () => <DialogsContainer />} />
          
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
