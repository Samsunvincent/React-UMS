export default function ProfileComponent() {
    return (
        <>
            <>
                <div className="profile-display-container position-absolute top-50 start-50 translate-middle">
                    {/* <h2>User Profile</h2> */}
                    <div id="profileContainer" />
                    <button onclick="window.history.back()" className="back-btn">
                        Go Back
                    </button>
                </div>
                <div className="position-absolute top-0 end-0">
                    <button
                        className="btn"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                    >
                        <i className="fa fa-bars" style={{ fontSize: 24 }} />
                    </button>
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex={-1}
                        id="offcanvasRight"
                        aria-labelledby="offcanvasRightLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <ul>
                                <li className="list-style-none">Reset Password</li>
                                <div className="pt-5">
                                    <form className="text-center p-5 " onsubmit="resetpassword(event)">
                                        <div className="pb-4 pt-3">
                                            <label htmlFor="password">Current Password :-</label>
                                            <span className="current_password">
                                                <input
                                                    className="newpassword_type"
                                                    type="password"
                                                    placeholder="Current password"
                                                    id="current_password"
                                                />
                                            </span>
                                        </div>
                                        <div className="pt-4 pb-4">
                                            <label htmlFor="password">New Password :-</label>
                                            <span className="newpassword">
                                                <input
                                                    className="newpassword_type"
                                                    type="password"
                                                    placeholder="New Password"
                                                    id="newpassword"
                                                />
                                            </span>
                                        </div>
                                        <div className="pb-2 pt-4">
                                            <input className="text-center " type="submit" name="" id="" />
                                        </div>
                                    </form>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}