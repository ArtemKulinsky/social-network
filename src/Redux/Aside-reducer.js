let initialState = {
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