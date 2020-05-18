import React, { Component, Fragment } from "react";
import _ from "lodash";
import Table from "../elements/table";
import Sync from "../elements/sync";
import AddData from "../elements/adddata";
import { getSchools } from "../../services/school";
import { DiscardMetaFields } from "../../utils/helper";
import Spinner from "../elements/spinner";
import EditData from "../elements/editdata";
import Add from "../elements/add";
import { getSchool } from "../../services/school";

class school extends Component {
  state = {
    schoolFields: [
      "_id",
      "Name",
      "MobileNumber",
      "Address",
      "EmailID",
      "IsActive",
      "SuperUserID",
    ],
    schoolData: [],
    error: null,
    isLoading: true,
    formFields: {},
    count: 0,
    showEditForm: false,
    showAddForm: false,
    showTable: true,
    editID: null,
  };

  async componentDidMount() {
    try {
      const res = await getSchools(this.props.token);
      this.setState({
        isLoading: false,
        schoolData: [...res.data],
        schoolFields: Object.keys(res.data[0]),
        count: this.state.schoolData.length,
      });
    } catch (error) {
      this.setState({ error: error.response });
    }
  }

  handleRefresh = async () => {
    try {
      this.setState({ isLoading: true });
      const res = await getSchools(this.props.token);
      this.setState({
        isLoading: false,
        schoolData: [...res.data],
        schoolFields: Object.keys(res.data[0]),
        count: this.state.schoolData.length,
      });
    } catch (error) {
      this.setState({ error: error.response });
    }
  };

  handleAdd = () => {
    this.setState({
      showAddForm: true,
      showTable: false,
    });
  };

  handleClose = () => {
    this.setState({
      showAddForm: false,
      showEditForm: false,
      showTable: true,
    });
    this.handleRefresh();
  }

  handleEditForm = async (event, id) => {
    event.preventDefault();
    try {
      const res = await getSchool(this.props.token, id);
      this.setState({
        editData: res.data,
        showEditForm: true,
        showTable: false,
        editID: id,
      });

    } catch (error) {
      this.setState({ error: error.response });
    }
  };

  render() {
    const { schoolData, schoolFields } = this.state;
    const metaFields = ["SuperUserID", "__v"];

    const schoolDataLocal = schoolData.map((data) => {
      return _.omit(data, metaFields);
    });

    const schoolFieldsLocal = Array.from(
      DiscardMetaFields(schoolFields, metaFields)
    );

    return (
      <React.Fragment>
        {this.state.isLoading && <Spinner />}
        {this.state.showAddForm && (
          <AddData
            name={"Add School"}
            formElements={schoolFields.filter((field) => field !== "IsActive")}
            close={this.handleClose}
            token={this.props.token}
          ></AddData>
        )}
        {this.state.showEditForm && (
          <EditData
            name={"Edit School"}
            id={this.state.editID}
            formElements={schoolFields}
            data={this.state.editData} 
            close={this.handleClose}
            token={this.props.token}></EditData>
        )}
        {!this.state.isLoading &&
          this.state.showTable &&
          <div className="text-right p-3">
            <Sync refresh={this.handleRefresh} />
            <Add add={this.handleAdd} />
          </div>
        }
        {!this.state.isLoading &&
          this.state.showTable &&
          (this.state.schoolData.length > 0 ? (
            <div>
              <p className="text-left">{`${this.state.schoolData.length} Records were Found`}</p>
              <Table
                head={schoolFieldsLocal}
                data={schoolDataLocal}
                editForm={this.handleEditForm}
              ></Table>
            </div>
          ) : (
              <p className="text-center">No Records were Found</p>
            ))}
      </React.Fragment>
    );
  }
}
export default school;
