import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../Redux/Profile-reducer';
import { NewPost } from './NewPost';

// const NewPostContainer = (props) => {
//   let addPost = () => {
//     props.dispatch(addPostActionCreator());
//   }

//   let addNewPostText = (text) => {
//     let action = updateNewPostTextActionCreator(text)
//     props.dispatch(action);
//   }

//   return ( <NewPost addPost={addPost} addNewPostText={addNewPostText} newPost={props.newPost} />)
// }

let mapStateToProps = (state) => {
  return {
    newPost: state.profileReducer.myPosts.newPost
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    addNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    }
  };
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;