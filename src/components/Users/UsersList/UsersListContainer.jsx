import { connect } from "react-redux";
import { changeFollow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching } from "../../../Redux/Users-reducer";
// import UserAPIComponent from "./UsersListC";
import axios from "axios";
import React from "react";
import UsersList from "./UsersList";
import Preloader from "../../common/preloader/Preloader";

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching();
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
         )
         .then((response) => {
            this.props.toggleIsFetching();
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching();
      this.props.setCurrentPage(pageNumber);
      axios
      .get(
         `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
         this.props.toggleIsFetching();
         this.props.setUsers(response.data.items);
      });
   };

   render() {
      return (
      <>
         {this.props.isFetching ? <Preloader/> : null}
         <UsersList
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            changeFollow={this.props.changeFollow}
            isFetching={this.props.isFetching}
         />
      </>
      );
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
   };
}

// let mapDispatchToProps = (dispatch) => {
//    return {
//       changeFollow: (id) => {
//          dispatch(changeFollowAC(id));
//       },
//       setUsers: (users) => {
//          dispatch(setUsersAC(users));
//       },
//       setCurrentPage: (currentPage) => {
//          dispatch(setCurrentPageAC(currentPage));
//       },
//       setTotalUsersCount: (totalUsersCount) => {
//          dispatch(setTotalUsersCountAC(totalUsersCount));
//       },
//       toggleIsFetching: () => {
//          dispatch(toggleIsFetchingAC());
//       }
//    };
// }

export default connect(mapStateToProps, {
   changeFollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching,
})(UsersContainer);


