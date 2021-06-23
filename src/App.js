import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Aside from './components/Aside/Aside';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Profile } from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileContainer';
import Users from './components/Users/Users';

function App(props) {
  return (
      <div className="wrapper">
        <HeaderContainer></HeaderContainer>
        <Aside asideReducer={props.appState.asideReducer} ></Aside>
        <main className="content">
          <Route path="/profile/:userId?" 
          render={ () => <ProfileContainer/> } />
          
          <Route path="/dialogs" 
            render={ () => <DialogsContainer />} />
          
          <Route path="/news" component={ Profile } />
          <Route path="/music" component={ Profile } />
          <Route path="/settings" component={ Profile } />
          <Route path="/users" 
            render={ () => <Users/> } />
          <Route path="/login" 
            render={ () => <Login/>} />
        </main>
      </div>
  );
}

export default App;
