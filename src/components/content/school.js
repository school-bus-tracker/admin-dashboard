import React, { Component } from 'react'
import Table from '../elements/table'
import Spinner from '../elements/spinner'
import AddData from '../elements/adddata'
import { getSchools } from '../../services/school'

class school extends Component {
    constructor(props) {
        super(props)
        this.state = {
            schoolFields:[],
            schoolData: [],
            error: null,
            isLoading: true,
            formFields:{}
        }
    }

    componentDidMount() {
        getSchools(this.props.token).then(
            res => {
                this.setState({ schoolData: res.data,
                    schoolFields: Object.keys(res.data[0]),
                    isLoading:false
                 })
            }
        ).catch(
            error => {
              this.setState({ error: error.response })
            }
        )
    }

    render() {
        return (
            <div>
                {this.state.isLoading && <Spinner></Spinner>}
                {
                  !this.state.isLoading && <AddData name={"Add School"} formElements={this.state.schoolFields} token={this.props.token}></AddData>
                }
                {
                    <Table head={this.state.schoolFields} data={this.state.schoolData} ></Table>
                }
            </div>
        )
    }
}
export default school;