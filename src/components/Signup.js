import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
            <section className="signup-bg">
                <div className="signup-row-1">
                    <img src="./images/de3Verse.png" alt />
                </div>
                <div className="signup-row-2">
                    <div className="signup-column-1">
                        <h2 className="signup-heading">Sign Up</h2>
                        <p className="signup-para">Sign in and start managing your candidates!</p>
                        <form className="signup-form" action>
                            <input className="signup-column1-input" type="text" name id placeholder="Username" />
                            <input className="signup-column1-input" type="text" name id placeholder="Email" />
                            <input className="signup-column1-input" type="password" placeholder="Password" />
                            <input className="signup-column1-input" type="password" placeholder="Confirm Password" />
                            <div className="signup-form-row2">
                                <input className="signup-form-checkbox" type="checkbox" />
                                <p className="signup-form-para">Remember Me</p>
                                <Link className="signup-link" to="#">Forgot Password?</Link>
                            </div>
                            <button className="signup-form-btn" type="submit">Register</button>
                        </form>
                    </div>
                </div>
                <div className="signup-end">
                    <img className="signup-img" src="./images/Vector.png" alt />
                </div>
            </section>

        </>
    );
}

export default Signup;