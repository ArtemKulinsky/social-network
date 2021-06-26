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
import { useEffect } from "react";

const UsersListContainerWithHooks = (props) => {
   // componentDidMount() {
   //    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
   // }
   let currentPage = props.currentPage;
   let pageSize = props.pageSize;

   useEffect(() => {
      props.requestUsers(currentPage, pageSize);
   }, [currentPage, pageSize]);

   const onPageChanged = (pageNumber) => {
      props.requestUsers(pageNumber, props.pageSize);
   };
   return (
      <>
         {props.isFetching ? <Preloader /> : null}
         <UsersList
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={onPageChanged}
            users={props.users}
            changeFollow={props.changeFollow}
            isFollowingInProgress={props.isFollowingInProgress}
         />
      </>
   );
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
)(UsersListContainerWithHooks);


