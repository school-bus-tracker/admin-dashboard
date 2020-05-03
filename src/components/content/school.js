import React, { Component, Fragment } from "react";
import _ from "lodash";
import Table from "../elements/table";
import Sync from "../elements/sync";
import AddData from "../elements/adddata";
import { getSchools } from "../../services/school";
import { DiscardMetaFields } from "../../utils/helper";
import Spinner from "../elements/spinner";

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

  handleEditForm = (id) => {
    console.log(id);
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
        <div className="text-right p-3">
          {this.state.isLoading && <Spinner />}
          {!this.state.isLoading && <Sync refresh={this.handleRefresh} />}
          {!this.state.isLoading && (
            <AddData
              name={"Add School"}
              formElements={schoolFields.filter(
                (field) => field !== "IsActive"
              )}
              token={this.props.token}
            ></AddData>
          )}
          {!this.state.isLoading &&
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
        </div>
      </React.Fragment>
    );
  }
}
export default school;
