import { connect } from "react-redux";
import { changeFollow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching } from "../../../Redux/Users-reducer";
import axios from "axios";
import React from "react";
import UsersList from "./UsersList";
import Preloader from "../../common/preloader/Preloader";
import { UsersAPI } from "../../../api/api";

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching();
debugger
      UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then((data) => {
            debugger
            this.props.toggleIsFetching();
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching();
      this.props.setCurrentPage(pageNumber);
      UsersAPI.getUsers(pageNumber, this.props.pageSize)
         .then((data) => {
            debugger;
            this.props.toggleIsFetching();
            this.props.setUsers(data.items);
         });
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
            isFetching={this.props.isFetching}
          />
        </>
      );
   }
}
window.axios = axios;
let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
   };
}

export default connect(mapStateToProps, {
   changeFollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching,
})(UsersContainer);


