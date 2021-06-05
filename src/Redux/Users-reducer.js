const CHANGE_FOLLOW = "CHANGE-FOLLOW";

let initialState = {
   users: [
      { id: 1, followed: true, userInf: {fullName: "Grigoriy Kuznezov", status: "Ебу коменду за матрас", location: {city: "Междуреченск", country: "Russia"}} },
      { id: 2, followed: true, userInf: {fullName: "Nikolay Latkin", status: "Скучно на трех работах, развлекаюсь как могу", location: {city: "Краснодырск", country: "Russia"}} },
      { id: 3, followed: false, userInf: {fullName: "Vladimir Tashinskiy", status: "Все как и на первом курсе", location: {city: "Воронежегрязинск", country: "Russia"}} },
      { id: 4, followed: true, userInf: {fullName: "Maksim Sokolov", status: "Пивко смешаю с водкой: ерж пиздец колючий", location: {city: "Краснодырск", country: "Russia"}} },
      { id: 5, followed: true, userInf: {fullName: "Elmira Abramova", status: "Резницы слиплись от холода. Переберусь- ка еще посевернее", location: {city: "Petrozavods State University", country: "Russia"}} },
      { id: 6, followed: false, userInf: {fullName: "Artem Schiva", status: "Опять приходил Артем, нажрался как сука", location: {city: "Краснодырск", country: "Russia"}} },
      { id: 7, followed: false, userInf: {fullName: "Grigoriy Kuznezov", status: "Ебу коменду за матрас", location: {city: "Междуреченск", country: "Russia"}} },
   ]
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case CHANGE_FOLLOW:{
         let stateCopy = {...state, users: [...state.users]};
         stateCopy.users[action.userId - 1].followed = !stateCopy.users[action.userId - 1].followed;
         return stateCopy;
      }
   
      default:
         return state;
   }
}

export const changeFollowAC = (id) => ({ type: CHANGE_FOLLOW , userId: id});

export default usersReducer;