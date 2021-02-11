import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { TYPE } from "../../global/redux/reducers/AuthReducer";

export const LogoutComponent = ({logout }) => {
  useEffect(() => {
    logout();
  }, []);
  return  <Redirect to="auth/login" />;
};

const mapStateToProps = (state) => ({
    auth: state
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch({type: TYPE.LOG_OUT })
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);
