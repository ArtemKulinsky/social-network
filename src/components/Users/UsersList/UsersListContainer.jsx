import { connect } from "react-redux";
import {
   changeFollow,
   getUsers,
} from "../../../Redux/Users-reducer";
import axios from "axios";
import React from "react";
import UsersList from "./UsersList";
import Preloader from "../../common/preloader/Preloader";

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
      // this.props.toggleIsFetching();
      // UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      //    .then((data) => {
      //       this.props.toggleIsFetching();
      //       this.props.setUsers(data.items);
      //       this.props.setTotalUsersCount(data.totalCount);
      //    });
   }

   onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);
   };

   render() {
      return (
         <>
            {this.props.isFetching ? <Preloader /> : null}
            <UsersList
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               changeFollow={this.props.changeFollow}
               isFollowingInProgress={this.props.isFollowingInProgress}
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
      isFollowingInProgress: state.usersPage.isFollowingInProgress,
   };
}

export default connect(mapStateToProps, {
   changeFollow,
   getUsers,
})(UsersContainer);


