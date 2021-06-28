let initialState = {
   pages : [
      {id: 0, name: "Profile", NavLink: "/profile"},
      {id: 1, name: "Messages", NavLink: "/dialogs"},
      {id: 2, name: "News", NavLink: "/news"},
      {id: 3, name: "Music", NavLink: "/music"},
      {id: 4, name: "Setting", NavLink: "/settings"},
      {id: 5, name: "Find Users", NavLink: "/users"},
   ],
   friends: [
      { id: 1, name: "Grigoriy Kuznezov", },
      { id: 2, name: "Nikolay Latkin", },
      { id: 3, name: "Vladimir Tashinskiy", },
      { id: 4, name: "Maksim Sokolov", },
      { id: 5, name: "Elmira Abramova", },
      { id: 6, name: "Artem Schiva", },
   ],
};

const asideReducer = (state = initialState, action) => {
   return state;
}

export default asideReducer;