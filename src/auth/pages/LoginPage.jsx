import React, {useEffect} from "react";
import LoginContainer from "../containers/LoginContainer";
import { connect } from 'react-redux'
import { TYPE } from "../../global/redux/reducers/AuthReducer";


function LoginPage({ setAuth, login, auth }) {
  // Just to show that the props auth is global
  useEffect(() => {
    console.log(auth);
  }, [auth])
  return (
    <>
      <LoginContainer login={login} setAuth={setAuth} />
    </>
  );
}



const mapStateToProps = (state) => ({
  auth: state
})

const mapDispatchToProps = dispatch => (
{
  login: (data) =>  dispatch({type: TYPE.AUTH, data})
}
) 

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
