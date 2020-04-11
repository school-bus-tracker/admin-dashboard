import React from 'react'

function login() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <h5 class="card-title text-center">Welcome Back!</h5>
                            <form class="form-signin">
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                                <div class="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                    <label class="custom-control-label" for="customCheck1">Remember Me</label>
                                </div>
                                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                <hr class="my-4" />
                                <div class="text-center">
                                    <a class="small" href="/accounts/forgot-password">Forgot Password?</a>
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