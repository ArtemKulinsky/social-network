let store = {
   _state : {
      profilePage: {
         myPosts : {
            newPost : {
               text : '',
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
   },

   _rerenderEntireTree() {
      console.log('State was changed');
   },

   getState() {
      debugger;
      return this._state;
   },

   addPost(text) {
      debugger;
      let newPost = {
         id: this._state.profilePage.myPosts.posts.length + 1,
         message: this._state.profilePage.myPosts.newPost.text,
         likesCount: 0,
      }

      this._state.profilePage.myPosts.posts.push(newPost);
      this._state.profilePage.myPosts.newPost.text = '';
      this._rerenderEntireTree();
   },

   addNewPostText(text) {
      this._state.profilePage.myPosts.newPost.text = text;
      this._rerenderEntireTree();
   },

   addMessage(text){
      let newMessage = {
         id:this._state.dialogsPage.messages.length + 1,
         message: text,
         belong: 'user',
      }

      this._state.dialogsPage.messages.unshift(newMessage);
      this._state.dialogsPage.newMessage.text = '';
      this._rerenderEntireTree()
   },

   addNewMessageText(text){
      this._state.dialogsPage.newMessage.text = text;
      this._rerenderEntireTree();
   },

   subcriber(observer){
      this._rerenderEntireTree = observer;
   },

   dispatch(action) {
      if(action.type === "ADD-POST") {
         let newPost = {
         id: this._state.profilePage.myPosts.posts.length + 1,
         message: this._state.profilePage.myPosts.newPost.text,
         likesCount: 0,
         }

         this._state.profilePage.myPosts.posts.push(newPost);
         this._state.profilePage.myPosts.newPost.text = '';
         this._rerenderEntireTree();
      } else if(action.type === "ADD-NEW-POST-TEXT") {
         this._state.profilePage.myPosts.newPost.text = action.newText;
         this._rerenderEntireTree();
      } else if(action.type === "ADD-MESSAGE") {
         let newMessage = {
         id: this._state.dialogsPage.messages.length + 1,
         message: this._state.dialogsPage.newMessage.text,
         belong: 'user',
      }

      this._state.dialogsPage.messages.unshift(newMessage);
      this._state.dialogsPage.newMessage.text = '';
      this._rerenderEntireTree()
      } else if (action.type === "ADD-NEW-MESSAGE-TEXT") {
         this._state.dialogsPage.newMessage.text = action.newText;
         this._rerenderEntireTree();
      }
   }  
}

export default store;