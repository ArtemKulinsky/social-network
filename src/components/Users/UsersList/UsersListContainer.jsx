import { connect } from "react-redux";
import {
  changeFollow,
  requestUsers,
  setCurrentPage,
} from "../../../Redux/Users-reducer";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import { withAuthRedirect } from "../../../hoc/AuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getIsFetching,
  getIsFollowingInProgress,
  getPageSize,
  getMaxPagesToShowCount,
  getTotalUsersCount,
  getUsers,
} from "../../../Redux/users-reselect";
import { useEffect } from "react";
import UsersList from "./UsersList";

const UsersListContainer = (props) => {
  let currentPage = props.currentPage;
  let pageSize = props.pageSize;

  useEffect(() => {
    props.requestUsers(currentPage, pageSize);

    // return (
    //   props.setCurrentPage(1)
    // )
  }, [currentPage, pageSize]);

  const onPageChanged = (pageNumber) => {
    props.requestUsers(pageNumber, props.pageSize);
  };
  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <UsersList
        totalUsersCount={props.totalUsersCount}
        maxPagesToShowCount={props.maxPagesToShowCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        users={props.users}
        changeFollow={props.changeFollow}
        isFollowingInProgress={props.isFollowingInProgress}
      />
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    maxPagesToShowCount: getMaxPagesToShowCount(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingInProgress: getIsFollowingInProgress(state),
  };
}

export default compose(
  connect(mapStateToProps, 
    { changeFollow, 
      requestUsers, 
      setCurrentPage }),
  withAuthRedirect
)(UsersListContainer);


