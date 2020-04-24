import React from 'react'
import { Redirect } from 'react-router-dom'
import {loginService, setUserToken, getUserToken} from '../../services/auth.js'


class login extends React.Component {
    constructor(props){
        super(props)
        this.handleLoginInput = this.handleLoginInput.bind(this)
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
        this.state={
            email: null,
            password: null,
            rememberMe: false,
            loading: false,
            loginError: null,
            redirect: false   
        }
    }
    
    
    handleLoginInput(event){
        const target = event.target
        const value = target.name === 'rememberMe' ? target.checked : target.value
        const name = target.name
        this.setState({
        [name]: value
        });
    }

    handleLoginSubmit(event){
        event.preventDefault()
        this.setState({loading:true})
        loginService(this.state).then(
            res =>{
                setUserToken(res.data)
                this.setState({redirect:true})
            }
        ).catch(
            error =>{
                this.setState({loginError:"Invalid Username and password"})
                this.setState({loading:false})
            }
        )
    }

    redirectApp = () =>{
        if(getUserToken() != null || this.state.redirect){
            return <Redirect to="/app/main"/>
        }
    }
    render(){
    return (  
        <div className="container">
            {(localStorage.getItem('admin-token') != null) && <Redirect to='/app/main'/>}
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Welcome Back!</h5>
                            {   
                                this.state.loginError && <div class="alert alert-danger text-center" role="alert">
                                    {this.state.loginError}
                                </div> 
                            }
                            <form className="form-signin" onSubmit={this.handleLoginSubmit}>
                                <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email address" onChange={this.handleLoginInput} required autofocus />
                                <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" onChange={this.handleLoginInput} required />
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" name="rememberMe" checked={this.state.rememberMe} onChange={this.handleLoginInput}/>
                                    <label className="custom-control-label" for="customCheck1">Remember Me</label>
                                </div>
                                 <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" disabled={this.state.loading}>
                                    { this.state.loading && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> }
                                    Sign in
                                </button>
                                <hr className="my-4" />
                                <div className="text-center">
                                    <a className="small" href="/login/forgot-password">Forgot Password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {this.redirectApp()}
        </div>
    )
    }
}
export default login;