import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
class Sync extends Component {
  render() {
    return (
      <button
        type="button"
        className="d-none d-sm-inline-block btn btn-m btn-secondary shadow-sm btn-icon-split"
        onClick={this.props.refresh}
      >
        <FontAwesomeIcon icon={faSync} />
      </button>
    );
  }
}

export default Sync;
