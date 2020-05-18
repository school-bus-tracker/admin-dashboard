import React, { Fragment } from 'react'

function DynamicInput(props) {
    return (
        <Fragment>
            {
                props.tag == 'input' && 
                props.type == "checkbox" &&
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" 
                        disabled={props.disable}
                        id="isActive"
                        name={props.name}
                        onChange={props.change}
                        checked={props.value}/>
                    <label class="custom-control-label" for="isActive">{props.name}</label>
                </div>
            }
            {
                props.tag == 'input' && props.type != "checkbox" &&
                <input
                    type={props.type}
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.value}
                    name={props.name}
                    onChange={props.change}
                    disabled={props.disable}
                    required/>
            }
            {
                props.tag == 'textarea' &&
                <textarea
                    type={props.type}
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.value}
                    name={props.name}
                    onChange={props.change}
                    disabled={props.disable}
                    required/>
            }
        </Fragment>
    )
}
export default DynamicInput;