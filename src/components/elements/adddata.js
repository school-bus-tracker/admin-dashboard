import React, { Fragment, Component } from "react";
import _ from "lodash";
import { getFormElement } from "../../services/getformelement";
import { insertSchool } from "../../services/school";
import { getUserProfile } from "../../services/auth.js";
import DynamicInput from "./dynamicinput";

class AddData extends Component {
  form = React.createRef();
  state = {
    loading: false,
    error: null,
    isPostedSuccessfully: false,
    postSuccessMessage: "Done",
    isModalClosed: false,
    formState: "new",
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
        <h5>
          {this.props.name}
        </h5>
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
          <form id="form" onSubmit={this.handleAddDataSubmit}>
            {getFormElement(this.props.formElements).map((element) => (
              <div className="form-group" key={element.name}>
                <DynamicInput
                  tag={element.tag}
                  type={element.type}
                  placeholder={`School ${element.name}`}
                  name={element.name}
                  change={this.handleAddDataInput}
                  disable={this.state.isPostedSuccessfully}/>
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
                save
              </button>
              <button
                type="button"
                className="btn btn-danger m-2"
                aria-label="Close"
                onClick={this.props.close}
              >
                close
              </button>

            </div>
          </form>
      </Fragment>
    );
  }
}

export default AddData;
