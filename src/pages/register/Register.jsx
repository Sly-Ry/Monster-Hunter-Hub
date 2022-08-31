import'./register.css'

export default function Register() {
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
                        <input placeholder='Username:' className="loginInput" />
                        <input placeholder='Email:' className="loginInput" />
                        <input placeholder='Password:' className="loginInput" />
                        <input placeholder='Confirm Password:' className="loginInput" />
                        <div className="loginBtnContainer">
                            <button className="loginBtn">
                                Register Hunter
                            </button>
                            <button className="loginRegister">
                                Sign into Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
