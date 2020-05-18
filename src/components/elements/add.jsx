import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Add extends Component {
    render() {
        return (
            <button
                type="button"
                title="Add new data"
                className="d-none d-sm-inline-block btn btn-m btn-primary shadow-sm btn-icon-split m-2"
                onClick={this.props.add}
                >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        )
    }
}
export default Add;