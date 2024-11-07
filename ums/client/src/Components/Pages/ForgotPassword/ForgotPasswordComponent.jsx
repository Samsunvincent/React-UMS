import 'bootstrap/dist/css/bootstrap.min.css';


export default function ForgotPasswordComponent() {
    return (
        <>
            <div className="container">
                <div className="form-box">
                    <h2>Forgot Password</h2>
                    <form onsubmit="password_changed(event)">
                        <div className="input-group">
                            <label htmlFor="new-password">New Password</label>
                            <input
                                type="password"
                                name="new-password"
                                required=""
                                id="newpassword"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                name="confirm-password"
                                required=""
                                id="confirmpassword"
                            />
                        </div>
                        <button type="submit">Reset Password</button>
                    </form>
                </div>
            </div>

        </>
    )
}