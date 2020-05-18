import React, { Component, Fragment } from "react";
import { getFormElement } from "../../services/getformelement";
import Spinner from "../elements/spinner";
import _ from "lodash";
import DynamicInput from "./dynamicinput";
import { editSchool } from "../../services/school";

class EditData extends Component {
    form = React.createRef();
    state = {
        loading: false,
        error: null,
        isPostedSuccessfully: false,
        postSuccessMessage: "Data updated Successfully!",
        formState: "edit",
        editData: {
            ...this.props.data
        }
    };


    handleEditDataInput = (event) => {
        const target = event.target;
        let currData = this.state.editData;
        const value = target.value;
        const name = target.name;    
        currData[name] = target.name === 'IsActive' ? target.checked : value;
        this.setState({ editData: currData });
    };

    handleEditDataSubmit =   async(event) => {
        event.preventDefault();
        this.setState({loading:true})
        const metaFields = ["_id", "__v"];
        let data = _.omit(this.state.editData, metaFields);
        try{
            let id = this.props.id;
            let res = await editSchool(this.props.token, id, data)
            if(res){
                this.setState({
                    isPostedSuccessfully: true,
                    loading:false
                    });
                this.props.close();
            }
        }
        catch(error){
            this.setState({ error: error.response.data });
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.isLoading && <Spinner />}
                <h5>{this.props.name}</h5>
                {this.state.error && (
                    <div className="alert alert-danger text-center" role="alert">
                        {this.state.error}
                    </div>
                )}
                {this.state.isPostedSuccessfully && (
                    <div
                        className="alert alert-success text-center"
                        role="alert"
                        hidden={this.state.isModalClosed}>
                        {this.state.postSuccessMessage}
                    </div>
                )}
                <form id="form" onSubmit={this.handleEditDataSubmit}>
                    {getFormElement(this.props.formElements).map((element) => (
                        <div className="form-group" key={element.name}>
                            <DynamicInput
                                tag ={element.tag}
                                type={element.type}
                                placeholder={element.name}
                                value={this.state.editData[element.name]}
                                name={element.name}
                                change={this.handleEditDataInput}
                                disable={this.state.isPostedSuccessfully}/>
                        </div>
                    ))}

                    <div className="text-center">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={this.state.loading}
                            hidden={this.state.isPostedSuccessfully}>
                            {this.state.loading && (
                                <span
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                            )} save</button>
                        <button
                            type="button"
                            className="btn btn-danger m-2"
                            aria-label="Close"
                            onClick={this.props.close}>
                            close
                            </button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default EditData;
