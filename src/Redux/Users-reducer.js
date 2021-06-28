import { UsersAPI } from "../api/api";

const CHANGE_FOLLOW = "CHANGE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
   users: [/*
      { id: 1, followed: true, userInf: {fullName: "Grigoriy Kuznezov", status: "Ебу коменду за матрас", location: {city: "Междуреченск", country: "Russia"}} },
      { id: 2, followed: true, userInf: {fullName: "Nikolay Latkin", status: "Скучно на трех работах, развлекаюсь как могу", location: {city: "Краснодырск", country: "Russia"}} },
      { id: 3, followed: false, userInf: {fullName: "Vladimir Tashinskiy", status: "Все как и на первом курсе", location: {city: "Воронежегрязинск", country: "Russia"}} },
      { id: 4, followed: true, userInf: {fullName: "Maksim Sokolov", status: "Пивко смешаю с водкой: ерж пиздец колючий", location: {city: "Краснодырск", country: "Russia"}} },
      { id: 5, followed: true, userInf: {fullName: "Elmira Abramova", status: "Резницы слиплись от холода. Переберусь- ка еще посевернее", location: {city: "Petrozavods State University", country: "Russia"}} },
      { id: 6, followed: false, userInf: {fullName: "Artem Schiva", status: "Опять приходил Артем, нажрался как сука", location: {city: "Краснодырск", country: "Russia"}} },
      { id: 7, followed: false, userInf: {fullName: "Grigoriy Kuznezov", status: "Ебу коменду за матрас", location: {city: "Междуреченск", country: "Russia"}} },
   */],
   maxPagesToShowCount: 10,
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   isFollowingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case CHANGE_FOLLOW:{
         return {
            ...state, 
            users: state.users.map( user => {
               if(user.id === action.userId) {
                  return {...user, followed: !user.followed}
               }
               return user;
            })
         }
      }

      case SET_USERS:{
         return {
            ...state, users: [...action.users] }
      }

      case SET_CURRENT_PAGE:{
         return {
            ...state, currentPage: action.currentPage, }
      }

      case SET_TOTAL_USERS_COUNT:{
         return {
            ...state, totalUsersCount: action.totalUsersCount,  }
      }

      case TOGGLE_IS_FETCHING:{
         return {
            ...state, isFetching: !state.isFetching, }
      }

      case TOGGLE_FOLLOWING_IN_PROGRESS:{
         return {
            ...state,
            isFollowingInProgress: action.isFetching ? 
               [...state.isFollowingInProgress, action.userId] :
               state.isFollowingInProgress.filter(id => id !== action.userId),
         }
      }
   
      default:
         return state;
   }
}

export const changeFollowStatus = (id) => ({ type: CHANGE_FOLLOW , userId: id });
export const setUsers = (users) => ({ type: SET_USERS , users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = () => ({ type: TOGGLE_IS_FETCHING });
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId });

export const requestUsers = (currentPage, pageSize) => {

   return async (dispatch) => {

      dispatch(toggleIsFetching());

      let data = await UsersAPI.getUsers(currentPage, pageSize);

      dispatch(toggleIsFetching());
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setCurrentPage(currentPage));
   }
}

export const changeFollow = (id, followStatus) => {

   return async (dispatch) => {

      dispatch(toggleFollowingInProgress(true, id));
      
      let apiMethod = followStatus 
         ? UsersAPI.unfollowUser.bind(this) 
         : UsersAPI.followUser.bind(this)

      let data = await apiMethod(id);

      if (!data.resultCode) {
         dispatch(changeFollowStatus(id));
         dispatch(toggleFollowingInProgress(false, id));
      }
   }
}

export default usersReducer;