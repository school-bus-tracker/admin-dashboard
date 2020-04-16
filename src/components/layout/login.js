import React from 'react'

function login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Welcome Back!</h5>
                            <form className="form-signin">
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" for="customCheck1">Remember Me</label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                <hr className="my-4" />
                                <div className="text-center">
                                    <a className="small" href="/login/forgot-password">Forgot Password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default login;