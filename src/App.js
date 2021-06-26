import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Aside from './components/Aside/Aside';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Profile } from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileContainer';
import Users from './components/Users/Users';
import { initializeApp } from './Redux/App-reducer';
import Preloader from './components/common/preloader/Preloader';
import ProfileContainerWithHooks from './components/Profile/ProfileContainerWithHooks';

class App extends React.Component {
  componentDidMount() { 
    this.props.initializeApp();
  };
  
  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div className="wrapper">
        <HeaderContainer></HeaderContainer>
        <Aside asideReducer={this.props.appState.asideReducer} ></Aside>
        <main className="content">
          <Route path="/profile/:userId?" 
          render={ () => <ProfileContainerWithHooks/> } />
          
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
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp,
  })
)(App)

// export default App;
