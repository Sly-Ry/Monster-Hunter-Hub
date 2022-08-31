import'./login.css'

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MHH</h3>
                    <span className="loginDesc">
                        Welcome, hunter.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Email:' className="loginInput" />
                        <input placeholder='Password:' className="loginInput" />
                        <div className="loginBtnContainer">
                            <button className="loginBtn">
                                Enter Hall
                            </button>
                            <button className="loginRegister">
                                Register New Hunter
                            </button>
                        </div>
                        <span className="loginForgot">Forgot Password?</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
