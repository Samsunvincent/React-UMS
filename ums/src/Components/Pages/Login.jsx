function Login() {

    return (
        <>
            <div className="container">
                <div className="row  position-absolute top-50 start-50 translate-middle">
                    <div className="col-lg-3 col-md-2" />
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true" />
                        </div>
                        <div className="col-lg-12 login-title">LOGIN PANEL</div>
                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form onsubmit="login(event)">
                                    <div className="form-group">
                                        <label className="form-control-label">USERNAME</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            i=""
                                            name="password"
                                            id="password"
                                            placeholder="password"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text">
                                            {/* Error Message */}
                                        </div>
                                        <div className="col-lg-6 login-btm login-button">
                                            <button type="submit" className="btn btn-outline-primary">
                                                LOGIN
                                            </button>
                                        </div>
                                        <a href="./email-verify.html">Forget password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;