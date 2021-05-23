import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import { Profile } from './components/Profile/Profile';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header></Header>
        <Aside aside={props.appState.aside} ></Aside>
        <div className="content">
          <Route path="/profile" 
            render={ () => <Profile addPost={ props.addPost } 
                                    addNewPostText={props.addNewPostText} 
                                    profilePage={props.appState.profilePage} /> } />
          
          <Route path="/dialogs" 
            render={ () => <Dialogs addNewMessageText={props.addNewMessageText} 
                                    addMessage={props.addMessage} 
                                    dialogsPage={props.appState.dialogsPage} />} />
          
          <Route path="/news" component={ Profile } />
          <Route path="/music" component={ Profile } />
          <Route path="/settings" component={ Profile } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
