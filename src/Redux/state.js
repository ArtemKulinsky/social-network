let rerenderEntireTree = () => {

}

let state = {
   profilePage: {
      myPosts : {
         newPost : {
            text : 'dqwd',
         },

         posts : [
            {id: 1, message: 'Hi! How are you?', likesCount: 1},
            {id: 2, message: 'Hi! How are you?', likesCount: 4},
            {id: 3, message: 'Hi! How are you?', likesCount: 3},
            {id: 4, message: 'Hi! How are you?', likesCount: 2},
         ],
      },
   },

   dialogsPage: {
      dialogs : [
         {id: 1, name :"Grigoriy Kuznezov"},
         {id: 2, name :"Nikolay Latkin"},
         {id: 3, name :"Vladimir Tashinskiy"},
         {id: 4, name :"Maksim Sokolov"},
         {id: 5, name :"Elmira Abramova"},
         {id: 6, name :"Artem Schiva"},
      ],

      messages : [
         {id: 1, message :"Пошел нахуй пидорас гнилой сдохни тварь", belong: 'user',},
         {id: 2, message :"Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!", belong: 'opponent',},
         {id: 3, message :"Я те говорю занят я", belong: 'user',},
         {id: 4, message :"Когда сможешь?", belong: 'opponent',},
         {id: 5, message :"Я сейчас занят", belong: 'user',},
         {id: 6, message :"Верни 3 сотки", belong: 'opponent',},
         {id: 7, message :"Пошел нахуй пидорас гнилой сдохни тварь", belong: 'user',},
         {id: 8, message :"Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!", belong: 'opponent',},
         {id: 9, message :"Я те говорю занят я", belong: 'user',},
         {id: 10, message :"Когда сможешь?", belong: 'opponent',},
         {id: 11, message :"Я сейчас занят", belong: 'user',},
         {id: 12, message :"Верни 3 сотки", belong: 'opponent',},
      ],

      newMessage: {
         text: '',
      }
   },

   aside: {
      friends: [
         { id: 1, name: "Grigoriy Kuznezov", },
         { id: 2, name: "Nikolay Latkin", },
         { id: 3, name: "Vladimir Tashinskiy", },
         { id: 4, name: "Maksim Sokolov", },
         { id: 5, name: "Elmira Abramova", },
         { id: 6, name: "Artem Schiva", },
      ]
   },
}

const addNewPostText = (text) => {
   state.profilePage.myPosts.newPost.text = text;
   rerenderEntireTree();
}

const addPost = (text) => {
   let newPost = {
      id: state.profilePage.myPosts.posts.length + 1,
      message: text,
      likesCount: 0,
   }

   state.profilePage.myPosts.posts.push(newPost);
   state.profilePage.myPosts.newPost.text = '';
   rerenderEntireTree();
}

const addMessage = (text) => {
   let newMessage = {
      id:state.dialogsPage.messages.length + 1,
      message: text,
      belong: 'user',
   }

   state.dialogsPage.messages.unshift(newMessage);
   state.dialogsPage.newMessage.text = '';
   rerenderEntireTree()
}

const addNewMessageText = (text) => {
   state.dialogsPage.newMessage.text = text;
   rerenderEntireTree();
}

const give = (func) => {
   rerenderEntireTree = func;
}

export {
   state,
   addPost,
   addNewPostText,
   addMessage,
   addNewMessageText,
   give,
};

