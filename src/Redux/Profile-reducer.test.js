import profileReducer, { addPost, deletePost } from "./Profile-reducer";

 let state = {
      myPosts : {
         posts : [
            {id: 1, message: 'Hi! How are you?', likesCount: 1},
            {id: 2, message: 'Hi! How are you?', likesCount: 4},
            {id: 3, message: 'Hi! How are you?', likesCount: 3},
            {id: 4, message: 'Hi! How are you?', likesCount: 2},
         ],
      },
   };

it('length of posts should be incremented', () => {
   //Делаем изначальные данные
   let action = addPost("Test post")
   
   // Делаем какие- то действия
   let newState = profileReducer(state, action);

   // Заявляем об ожиданиях 
   expect(newState.myPosts.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
   //Делаем изначальные данные
   let action = addPost("Test post")
   
   // Делаем какие- то действия
   let newState = profileReducer(state, action);

   // Заявляем об ожиданиях
   expect(newState.myPosts.posts[4].message).toBe("Test post");
});

it('after deleting length of posts should be incremented', () => {
   //Делаем изначальные данные
   let action = deletePost(1)
   
   // Делаем какие- то действия
   let newState = profileReducer(state, action);

   // Заявляем об ожиданиях
   expect(newState.myPosts.posts.length).toBe(3);
});