import React from 'react'

function forgotpassword() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Forgot Password!</h5>
                            <form className="form-signin">
                                <p>We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Reset Password</button>
                                <hr className="my-4" />
                                <div className="text-center">
                                    <a className="small" href="/login">Already have an account? Login!</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forgotpassword;