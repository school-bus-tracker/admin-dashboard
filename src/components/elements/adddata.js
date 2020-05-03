import React, { Fragment, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import { getFormElement } from "../../services/getformelement";
import { insertSchool } from "../../services/school";
import { getUserProfile } from "../../services/auth.js";

class adddata extends Component {
  form = React.createRef();
  state = {
    loading: false,
    error: null,
    isPostedSuccessfully: false,
    postSuccessMessage: "Done",
    isModalClosed: false,
    formState: "new",
  };
  handleCloseInput = () => {
    this.setState({ isModalClosed: true, isPostedSuccessfully: false });
    document.getElementById("form").reset();
  };

  handleAddDataInput = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleAddDataSubmit = async (event) => {
    try {
      event.preventDefault();
      this.setState({ loading: true, isModalClosed: false });
      let data = {
        SuperUserID: getUserProfile().id,
      };
      getFormElement(this.props.formElements).map((element) => {
        data[element.name] = this.state[element.name];
      });
      const res = await insertSchool(this.props.token, data);
      if (res) {
        this.setState({
          loading: false,
          isPostedSuccessfully: true,
          error: null,
        });
      }
    } catch (error) {
      this.setState({ error: error.response.data, loading: false });
    }
  };
  render() {
    return (
      <Fragment>
        <button
          type="button"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm btn-icon-split m-2"
          data-toggle="modal"
          data-target="#AddModal"
        >
          <FontAwesomeIcon icon={faPlus} />
          <span className="text">{this.props.name}</span>
        </button>
        <div
          className="modal fade"
          id="AddModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.props.name}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.handleCloseInput}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {this.state.error && (
                <div
                  className="alert alert-danger text-center"
                  role="alert"
                  hidden={this.state.isModalClosed}
                >
                  {this.state.error}
                </div>
              )}
              {this.state.isPostedSuccessfully && (
                <div
                  className="alert alert-success text-center"
                  role="alert"
                  hidden={this.state.isModalClosed}
                >
                  {this.state.postSuccessMessage}
                </div>
              )}
              <div className="modal-body">
                <form id="form" onSubmit={this.handleAddDataSubmit}>
                  {getFormElement(this.props.formElements).map((element) => (
                    <div className="form-group" key={element.name}>
                      <input
                        type={element.type}
                        placeholder={`School ${element.name}`}
                        name={element.name}
                        className="form-control"
                        onChange={this.handleAddDataInput}
                        disabled={this.state.isPostedSuccessfully}
                        required
                      />
                    </div>
                  ))}
                  <div className="text-center">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      disabled={this.state.loading}
                      hidden={this.state.isPostedSuccessfully}
                    >
                      {this.state.loading && (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      )}
                      {this.props.name}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default adddata;
