import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends Component {

    render() {
        return (
            <div>
                StreamCreate
            </div>
        );
    }
}

export default reduxForm({
    form: 'New Steam'
})(StreamCreate);
