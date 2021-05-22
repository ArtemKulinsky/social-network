import { rerenderEntireTree } from "../render";

let state = {
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
         {id: 1, text :"Пошел нахуй пидорас гнилой сдохни тварь", belong: 'user',},
         {id: 2, text :"Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!", belong: 'opponent',},
         {id: 3, text :"Я те говорю занят я", belong: 'user',},
         {id: 4, text :"Когда сможешь?", belong: 'opponent',},
         {id: 5, text :"Я сейчас занят", belong: 'user',},
         {id: 6, text :"Верни 3 сотки", belong: 'opponent',},
         {id: 1, text :"Пошел нахуй пидорас гнилой сдохни тварь", belong: 'user',},
         {id: 2, text :"Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!", belong: 'opponent',},
         {id: 3, text :"Я те говорю занят я", belong: 'user',},
         {id: 4, text :"Когда сможешь?", belong: 'opponent',},
         {id: 5, text :"Я сейчас занят", belong: 'user',},
         {id: 6, text :"Верни 3 сотки", belong: 'opponent',},
      ]
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

let addText = (text) => {
   debugger
   state.profilePage.myPosts.newPost.text += text;
   rerenderEntireTree(state);
}

let addPost = (text) => {
   let newPost = {
      id: state.profilePage.myPosts.posts.length + 1,
      message: text,
      likesCount: 0,
   }
   state.profilePage.myPosts.posts.push(newPost);
   rerenderEntireTree(state);
}

export {
   state,
   addPost,
   addText,
};

