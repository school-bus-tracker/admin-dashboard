import React, {Component} from 'react'


class table extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <table className="table">
                <thead>
                    {
                       this.props.head.map(
                           head => <th>{head}</th>
                       )
                    }
                </thead>
                <tbody>
                    {
                        this.props.data.map(
                            row => <tr>{
                                Object.values(row).map(
                                    data => <td>{data}</td>
                                )
                            }</tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}
export default table;