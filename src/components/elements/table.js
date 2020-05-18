import React, { Component } from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class table extends Component {
 
  renderData = (data, objId, rowName) => {
    if (data === "true")
      return <FontAwesomeIcon icon={faCheckCircle} color="green" />;

    if (data === "false")
      return <FontAwesomeIcon icon={faTimesCircle} color="red" />;

    if (rowName === data)
      return (
        <Link onClick={e => this.props.editForm(e, objId)}>
          <p>{rowName}</p>
        </Link>
      );
    return data;
  };


  renderTableRow = (row) => {
    const objId = row._id;
    const rowName = row.Name;

    return Object.values(_.omit(row, "_id")).map((data) => (
      <td key={data}>{this.renderData(data.toString(), objId, rowName)}</td>
    ));
  };

  renderTableHead = (head) => {
    return Object.values(
      head
        .filter((field) => field !== "_id")
        .map((head) => <th key={head} >{head}</th>)
    );
  };
  
  render() {
    return (
      <div className="table-responsive">
        <table id="datatable" data-page-length="25" className="table table-bordered table-hover text-left">
          <thead>
            <tr>{this.renderTableHead(this.props.head)}</tr>
          </thead>
          <tbody>
            {this.props.data.map((row) => (
              <tr key={row._id}>{this.renderTableRow(row)}</tr>
            ))}
            {
              console.log(this.props.data.length)
            }
          </tbody>
        </table>
      </div>
    );
  }
}
export default table;
