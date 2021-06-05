import { connect } from "react-redux";
import { changeFollowAC } from "../../../Redux/Users-reducer";
import UsersList from "./UsersList";

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   };
}

let mapDispatchToProps = (dispatch) => {
   return {
      changeFollow: (id) => {
         debugger;
         dispatch(changeFollowAC(id))
      },
   }
}

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListContainer;


