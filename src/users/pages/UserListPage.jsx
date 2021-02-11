import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchUsers from "../../global/redux/actions/AuthAction";

const UserListPage = ({ fetchUsers, users }) => {
  useEffect(() => {
      fetchUsers();
  
  }, []);
  return (
    <>
      {users.length === 0 && "Loading...."}
      {users && <pre>{JSON.stringify(users)}</pre>}
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.UsersReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);
