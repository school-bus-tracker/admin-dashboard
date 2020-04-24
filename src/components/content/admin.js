import React, {Component} from 'react'
import {getAdmin} from '../../services/admin.js'

class admin extends Component {
    constructor(props) {
        super(props)
        this.state={
            adminDetails:[],
            error: null
        }
    }

    componentDidMount(){
        var result
        getAdmin(this.props.token).then(
            res => {
                this.setState({adminDetails:res})             
            } 
        ).catch(
            error =>{
                this.setState({error:error.response.data})
            }
        )
    }
    render(){
        return (
            <div>
                Admin Manager
            </div>
        )
    }
}
export default admin;