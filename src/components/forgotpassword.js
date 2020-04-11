import React from 'react'

function forgotpassword() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <h5 class="card-title text-center">Forgot Password!</h5>
                            <form class="form-signin">
                                <p>We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Reset Password</button>
                                <hr class="my-4" />
                                <div class="text-center">
                                    <a class="small" href="/accounts/login">Already have an account? Login!</a>
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