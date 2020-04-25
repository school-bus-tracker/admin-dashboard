import React, { Fragment, Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getFormElement } from '../../services/getformelement'
import { insertSchool } from '../../services/school'

class adddata extends Component {
    constructor(props) {
        super(props)
        this.handleAddDataInput = this.handleAddDataInput.bind(this)
        this.handleAddDataSubmit = this.handleAddDataSubmit.bind(this)
        this.state = {
            loading: false,
            error: null

        }
    }

    handleAddDataInput(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        });
    }

    handleAddDataSubmit(event) {
        event.preventDefault()
        this.setState({ loading: true })
        let data = {
            'SuperUserID':'5e9beb56fc17a800179e75f0'
        }
        getFormElement(this.props.formElements).map(
            element => { data[element.name] = this.state[element.name] }
        )
        console.log(this.props.token);
        
        insertSchool(this.props.token, data).then(
            res => {
                console.log(res.data)
                this.setState({ loading: false })
            }
        ).catch(
            error => {
                this.setState({ error: error.response.data, loading: false })
            }
        )
    }
    render() {
        return (
            <Fragment>
                <div className="text-right p-3">
                    <button type="button" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm btn-icon-split" data-toggle="modal" data-target="#AddModal">
                        <FontAwesomeIcon icon={faPlus} />
                        <span className="text">{this.props.name}</span>
                    </button>
                </div>
                <div className="modal fade" id="AddModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{this.props.name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            {   
                                this.state.error && <div class="alert alert-danger text-center" role="alert">
                                    {this.state.error}
                                </div> 
                            }
                            <div className="modal-body">
                                <form onSubmit={this.handleAddDataSubmit}>
                                    {
                                        getFormElement(this.props.formElements).map(
                                            element =>
                                                <div className="form-group">
                                                    <input type={element.type} placeholder={`School ${element.name}`} name={element.name} className="form-control" onChange={this.handleAddDataInput} required />
                                                </div>
                                        )

                                    }
                                    <div className="text-center">
                                        <button className="btn btn-primary" type="submit" disabled={this.state.loading}>
                                            {this.state.loading && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                            {this.props.name}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default adddata;
