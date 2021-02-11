import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

export default function LoginContainer({ setAuth }) {
    const history = useHistory();
    return (
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
          <div class="col-lg-12 login-key">
            <i class="fa fa-key" aria-hidden="true"></i>
          </div>
          <div class="col-lg-12 login-title">ADMIN PANEL</div>

          <div class="col-lg-12 login-form">
            <div class="col-lg-12 login-form">
              <form>
                <div class="form-group">
                  <label class="form-control-label">USERNAME</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label class="form-control-label">PASSWORD</label>
                  <input type="password" class="form-control" />
                </div>

                <div class="col-lg-12 loginbttm">
                  <div class="col-lg-6 login-btm login-text"></div>
                  <div class="col-lg-6 login-btm login-button">
                    <button
                      onClick={() => {
                          setAuth(true)
                          history.push("/homepage")
                        }}
                      type="submit"
                      class="btn btn-outline-primary"
                    >
                      LOGIN
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
  );
}
