import React, {Component} from 'react';
import {connect} from "react-redux";
import {createStream} from "../../actions";

import StreamForm from "./StreamForm";

class StreamCreate extends Component {

    onSubmitCreate = formValues => {
        console.log(formValues);
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create new Stream</h3>
                <StreamForm onSubmit={this.onSubmitCreate} />
            </div>
        );
    }
}

export default connect(null, {createStream})(StreamCreate);
