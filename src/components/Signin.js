import { Link } from "react-router-dom";

const Signin = () => {

    return (
        <>
            <section className="signin-bg">
                <div className="signin-row-1">
                    <img src="./images/de3Verse.png" alt />
                </div>
                <div className="signin-row-2">
                    <div className="signin-column-1">
                        <h2 className="signin-heading">Sign In</h2>
                        <p className="signin-para">Sign in and start managing your candidates!</p>
                        <form className="signin-form" action>
                            <input className="signin-column1-input" type="text" name id placeholder="Login" />
                            <input className="signin-column1-input" type="text" placeholder="Password" />
                            <div className="signin-form-row2">
                                <input className="signin-form-checkbox" type="checkbox" />
                                <p className="signin-form-para">Remember Me</p>
                                <Link className="signin-link" to="#">Forgot Password?</Link>
                            </div>
                            <button className="signin-form-btn" type="submit">Login</button>
                        </form>
                    </div>
                </div>
                <div className="signin-end">
                    <img classname="signin-img" src="./images/Vector.png"  />
                </div>
            </section>

        </>
    );
}

export default Signin;