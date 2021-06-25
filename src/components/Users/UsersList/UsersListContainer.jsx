import { connect } from "react-redux";
import { changeFollow, requestUsers } from "../../../Redux/Users-reducer";
import React from "react";
import UsersList from "./UsersList";
import Preloader from "../../common/preloader/Preloader";
import { withAuthRedirect } from "../../../hoc/AuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getIsFetching,
  getIsFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../../Redux/users-reselect";

class UsersListContainer extends React.Component {
   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
      this.props.requestUsers(pageNumber, this.props.pageSize);
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
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      isFollowingInProgress: getIsFollowingInProgress(state),
   };
}

export default compose(
   connect(mapStateToProps, { changeFollow, requestUsers }),
   withAuthRedirect
)(UsersListContainer);


