import { connect } from "react-redux";
import { changeFollowAC, setUsersAC } from "../../../Redux/Users-reducer";
import UsersList from "./UsersList";

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   };
}

let mapDispatchToProps = (dispatch) => {
   return {
      changeFollow: (id) => {
         dispatch(changeFollowAC(id))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
   }
}

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListContainer;


